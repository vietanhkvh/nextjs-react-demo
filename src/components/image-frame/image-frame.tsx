import Image from 'next/image';
import { Photo } from '@constants/photo-example';

interface IImageFrameProps {
  photo: Photo;
}
const ImageFrame: React.FC<IImageFrameProps> = (props) => {
  const {
    photo: { id, name, href, username, imageSrc },
  } = props;
  return (
    <div className='image-frame'>
      <Image src={imageSrc} alt={id} width={480} height={480} />
      <div>
        <h3>{name}</h3>
        <p>From {username}</p>
      </div>
    </div>
  );
};

export default ImageFrame;
