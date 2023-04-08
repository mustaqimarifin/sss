import Image from 'next/image';

const DickPics = (props) => {
  const { src, alt, blurDataURL } = props;
  return (
    <div className="filter drop-shadow-sm">
      <Image
        src={require(`../public/static/images/${src}`)}
        alt={alt}
        blurDataURL={blurDataURL}
        placeholder={'blur' ?? 'empty'}
        className="rounded-lg"
      />
    </div>
  );
};

export default DickPics;
