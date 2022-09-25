import { useContext } from 'react';
import Image from 'next/image';
import {
  CardContainer,
  CardOverlay,
  CardTitle,
  CardTitleOverlay,
  Grid,
  MobileCard,
  MobileCardOverlay,
  MobileDescription,
  MobileDetails,
  MobileTitle,
  ServicesComponent,
  Text,
  TextList,
  TextListItem,
} from './styles/styledServices';
import { MobileContext } from '../contexts/mobileContext';
import Lead from './Lead';
import { servicesLead } from '../lib/data-arrays/lead-data';
import { servicesCardsArray } from '../lib/data-arrays/services-cards-data';

export default function Services() {
  const mobileWidth = useContext(MobileContext);

  return (
    <ServicesComponent>
      <Lead data={servicesLead} />

      <Grid mobileWidth={mobileWidth}>
        {mobileWidth
          ? servicesCardsArray.map((card, i) => (
              <CardContainer key={i}>
                <MobileCard>
                  <MobileDetails>
                    <MobileTitle>{card.title}</MobileTitle>
                    <MobileDescription mobileWidth={mobileWidth}>
                      {card.componentName === 'extinguisher' &&
                        card.text?.map((textItem, i) => (
                          <Text key={i}>{textItem}</Text>
                        ))}
                      <TextList mobileWidth={mobileWidth}>
                        {card.textListItems?.map((textListItem, i) => (
                          <TextListItem key={i}>
                            <span className="list-item-span">
                              {textListItem}
                            </span>
                          </TextListItem>
                        ))}
                      </TextList>
                      {card.componentName !== 'extinguisher' &&
                        card.text?.map((textItem, i) => (
                          <Text key={i}>{textItem}</Text>
                        ))}
                    </MobileDescription>
                  </MobileDetails>
                  <Image
                    className="card-image"
                    src={card.image}
                    alt={card.componentName}
                  />
                  <MobileCardOverlay />
                </MobileCard>
              </CardContainer>
            ))
          : servicesCardsArray.map((card, i) => (
              <CardContainer key={i}>
                <div className={`card card_${card.componentName}`}>
                  <CardTitleOverlay>
                    <CardTitle>{card.title}</CardTitle>
                  </CardTitleOverlay>
                  <Image
                    className="card-image"
                    src={card.image}
                    alt={card.componentName}
                  />
                  <CardOverlay />
                </div>
                <div
                  className={`popup popup_${card.componentName}`}
                  mobileWidth={mobileWidth}>
                  {card.componentName === 'extinguisher' &&
                    card.text?.map((textItem, i) => (
                      <Text key={i}>{textItem}</Text>
                    ))}
                  <TextList>
                    {card.textListItems?.map((textListItem, i) => (
                      <TextListItem key={i}>
                        <span className="list-item-span">{textListItem}</span>
                      </TextListItem>
                    ))}
                  </TextList>
                  {card.componentName !== 'extinguisher' &&
                    card.text?.map((textItem, i) => (
                      <Text key={i}>{textItem}</Text>
                    ))}
                </div>
              </CardContainer>
            ))}
      </Grid>
    </ServicesComponent>
  );
}
