import ImageFrame from '@component/image-frame/image-frame';
import photos from '@constants/photo-example';

interface IPhotoPageProps {
  params: { id: string };
}
const PhotoPage: React.FC<IPhotoPageProps> = (props) => {
  const {
    params: { id },
  } = props;
  const selectedPhoto = photos.find((item) => item.id === id)!;
  return <ImageFrame photo={selectedPhoto} />;
};

export default PhotoPage;
