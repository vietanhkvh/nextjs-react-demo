import Link from 'next/link';
import {
  ROUTE_DEMO_ROUTING_CATCH_ALL_SEGMENTS,
  ROUTE_DEMO_ROUTING_OPTIONAL_CATCH_ALL_SEGMENTS,
} from '@routes/pathes';
import Header from '@component/header';

interface IRoutingTemplateProps {
  children: React.ReactNode;
}

const RoutingTemplate: React.FC<IRoutingTemplateProps> = (props) => {
  const { children } = props;
  return (
    <div>
      {children}
      <Header>
        <Link href={ROUTE_DEMO_ROUTING_CATCH_ALL_SEGMENTS}>
          Catch-all segements
        </Link>
        <Link href={ROUTE_DEMO_ROUTING_OPTIONAL_CATCH_ALL_SEGMENTS}>
          Optional catch-all segements
        </Link>
      </Header>
    </div>
  );
};

export default RoutingTemplate;
