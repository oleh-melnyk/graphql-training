import { pubsub } from '../../util';

const postDeleted = () => pubsub.asyncIterator(['POST_DELETED']);

export { postDeleted };
