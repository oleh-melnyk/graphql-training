import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';
import { FormValidationMessages, getFormErrors, trimValue } from 'src/app/@shared/utils';
import { Comment, Post } from 'src/app/posts/models';
import { PostsService } from 'src/app/posts/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnDestroy {
  post$!: Observable<{ post: Post; loading: boolean }>;
  postId!: string;
  comments!: Comment[];

  commentForm = new UntypedFormGroup({
    name: new UntypedFormControl(null, Validators.required),
    email: new UntypedFormControl(null, [Validators.required, Validators.email]),
    body: new UntypedFormControl(null, Validators.required),
  });
  formErrors = {
    name: [],
    email: [],
    body: [],
  };

  private validationMessages: FormValidationMessages = {
    name: { required: 'Field is required' },
    email: { required: 'Field is required', email: 'Please use correct email format' },
    body: { required: 'Field is required' },
  };
  private unsubscribe$ = new Subject<void>();

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private postsService: PostsService) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params || {};
    if (id) {
      this.postId = id;
      this.queryPost(id);
    } else {
      this.router.navigate(['/posts']);
    }

    this.commentForm.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(this.updateFormErrors.bind(this));
  }

  queryPost(id: string): void {
    this.post$ = this.postsService.queryPost(+id);
  }

  navigateBack(): void {
    this.router.navigate(['/posts']);
  }

  createComment() {
    if (this.commentForm.invalid) {
      this.updateFormErrors();
      return;
    }

    const post = trimValue(this.commentForm.value);
    this.postsService.createComment(+this.postId, post).subscribe(this.clearContentForm.bind(this));
  }

  clearContentForm() {
    this.commentForm.reset();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private updateFormErrors(): void {
    this.formErrors = getFormErrors(this.commentForm, this.formErrors, this.validationMessages) as any;
  }
}
