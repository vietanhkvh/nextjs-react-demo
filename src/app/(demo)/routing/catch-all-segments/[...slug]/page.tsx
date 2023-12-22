interface ICatchAllSegmentsProps {
  params: { slug: string[] };
}

const CatchAllSegments: React.FC<ICatchAllSegmentsProps> = ({
  params: { slug },
}) => {
  return <div>Catch All Segments {slug}</div>;
};

export default CatchAllSegments;
