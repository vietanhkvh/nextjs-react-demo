interface IOptionalCatchAllSegmentsProps {
  params: { slug: string[] };
}

const OptionalCatchAllSegments: React.FC<IOptionalCatchAllSegmentsProps> = (
  props
) => {
  const {
    params: { slug },
  } = props;
  return <div>Optional CatchAllSegments {slug}</div>;
};

export default OptionalCatchAllSegments;
