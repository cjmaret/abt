import {
  LeadComponent,
  DetailsGroup,
  Title,
  Subtitle,
} from './styles/styledLead';

export default function Lead({ data }) {
  return (
    <LeadComponent image={data.image}>
      <DetailsGroup>
        <Title>{data.title}</Title>
        <Subtitle>{data.subtitle}</Subtitle>
      </DetailsGroup>
    </LeadComponent>
  );
}
