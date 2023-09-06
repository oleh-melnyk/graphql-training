import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionInfo, Photo } from 'src/app/albums/models';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { FormValidationMessages, getFormErrors, trimValue } from 'src/app/@shared/utils';
import { Subject, takeUntil } from 'rxjs';
import { GalleryService } from 'src/app/gallery/gallery.service';
import { PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit, OnDestroy {
  albumId!: number;
  gallery!: Photo[];
  info!: ConnectionInfo;
  itemsPerPage = 9;
  isShownCreateModal = false;

  createForm = new UntypedFormGroup({
    title: new UntypedFormControl(null, Validators.required),
    url: new UntypedFormControl(null, Validators.required),
  });
  createFormErrors = {
    title: [],
    url: [],
  };

  private validationMessages: FormValidationMessages = {
    title: { required: 'Field is required' },
    url: { required: 'Field is required' },
  };
  private unsubscribe$ = new Subject<void>();

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private galleryService: GalleryService) {}

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params || {};
    if (id) {
      this.albumId = id;
      this.createForm.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(this.handleCreateFormErrors.bind(this));
      this.queryPhotos();
    } else {
      this.router.navigate(['/posts']);
    }
  }

  queryPhotos(page = 1): void {
    this.galleryService.queryPhotosPaginated(this.albumId, page, this.itemsPerPage).subscribe(({ data, info }) => {
      this.gallery = data;
      this.info = info;
    });
  }

  onPageChange({ page }: PaginatorState): void {
    this.queryPhotos(1 + page!);
  }

  createPhoto(): void {
    if (this.createForm.invalid) {
      this.handleCreateFormErrors();
      return;
    }

    const photo = trimValue(this.createForm.value);
    this.galleryService.createPhoto(this.albumId, photo).subscribe(this.hideCreateModal.bind(this));
  }

  showCreateModal(): void {
    this.isShownCreateModal = true;
  }

  hideCreateModal(): void {
    this.isShownCreateModal = false;
    this.createForm.reset();
  }

  navigateBack(): void {
    this.router.navigate(['/albums']);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private handleCreateFormErrors() {
    this.createFormErrors = getFormErrors(this.createForm, this.createFormErrors, this.validationMessages) as any;
  }
}
