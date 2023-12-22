import classNames from 'classnames';
import photos from '@constants/photo-example';
import Modal from '@component/modal/modal';
import ImageFrame from '@component/image-frame/image-frame';
import styles from './styles.module.scss';

interface IPhotoModal {
  params: { id: string };
}

const PhotoModal: React.FC<IPhotoModal> = (props) => {
  const {
    params: { id: photoId },
  } = props;
  const selectedPhoto = photos.find((item) => item.id === photoId)!;
  return (
    <Modal>
      <ImageFrame photo={selectedPhoto} />
    </Modal>
  );
};

export default PhotoModal;
