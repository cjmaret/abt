import Image from 'next/image';
import Link from 'next/link';
import {
  ExtinguisherClass,
  ExtinguisherClassDescription,
  ExtinguisherClassTitle,
  InfoDescription,
  InfoGroup,
  InfoLink,
  InfoSubtitle,
  InfoTitle,
  InfoTitleGroup,
  ResourcesComponent,
  UsefulLinkAnsul,
  UsefulLinkBadger,
  UsefulLinkFDNY,
  UsefulLinkGroup,
  UsefulLinkNFPA,
  UsefulLinkPyrochem,
} from './styles/styledResources';
import AnsulImage from '../images/resources-useful-sites/ansul.png';
import BadgerImage from '../images/resources-useful-sites/badger.jpeg';
import FDNYImage from '../images/resources-useful-sites/fdny.png';
import PyrochemImage from '../images/resources-useful-sites/pyrochem.jpeg';
import NFPAImage from '../images/resources-useful-sites/nfpa.png';
import Lead from './Lead';
import { resourcesLead } from '../lib/data-arrays/lead-data';

export default function Resources() {
  return (
    <ResourcesComponent>
      <Lead data={resourcesLead} />
      <UsefulLinkGroup>
        <UsefulLinkAnsul
          href="https://www.ansul.com/en/us/pages/default.aspx"
          target="_blank">
          <Image class="useful__img" src={AnsulImage} alt="ansul logo" />
        </UsefulLinkAnsul>

        <UsefulLinkBadger
          href="https://www.badgerfire.com/Pages/Home.aspx"
          target="_blank">
          <Image class="useful__img" src={BadgerImage} alt="badger logo" />
        </UsefulLinkBadger>

        <UsefulLinkFDNY
          href="http://www.nyc.gov/html/fdny/html/home2.shtml"
          target="_blank">
          <Image class="useful__img" src={FDNYImage} alt="fdny logo" />
        </UsefulLinkFDNY>

        <UsefulLinkPyrochem href="http://www.pyrochem.com/" target="_blank">
          <Image class="useful__img" src={PyrochemImage} alt="pyrochem logo" />
        </UsefulLinkPyrochem>

        <UsefulLinkNFPA href="http://www.nfpa.org/" target="_blank">
          <Image class="useful__img" src={NFPAImage} alt="nfpa logo" />
        </UsefulLinkNFPA>
      </UsefulLinkGroup>

      <InfoGroup>
        <InfoTitleGroup>
          <InfoTitle>Fire Extinguisher Types and Facts</InfoTitle>
          <InfoSubtitle>
            Fires are classified into five (5) classes. They are described
            below:
          </InfoSubtitle>
        </InfoTitleGroup>
        <ExtinguisherClass>
          <ExtinguisherClassTitle>Class A</ExtinguisherClassTitle>
          <ExtinguisherClassDescription>
            A fire extinguisher labeled with letter &quot;A&quot; is for use on
            Class A fires. Class A fires are fires that involve ordinary
            combustible materials such as cloth, wood, paper, rubber, and many
            plastics.
          </ExtinguisherClassDescription>
        </ExtinguisherClass>
        <ExtinguisherClass>
          <ExtinguisherClassTitle>Class B</ExtinguisherClassTitle>
          <ExtinguisherClassDescription>
            A fire extinguisher labeled with letter &quot;B&quot; is for use on
            Class B fires. Class B fires are fires that involve flammable and
            combustible liquids such as gasoline, alcohol, diesel oil, oil-based
            paints, lacquers, etc., and flammable gases.
          </ExtinguisherClassDescription>
        </ExtinguisherClass>
        <ExtinguisherClass>
          <ExtinguisherClassTitle>Class C</ExtinguisherClassTitle>
          <ExtinguisherClassDescription>
            A fire extinguisher labeled with letter &quot;C&quot; is for use on
            Class C fires. Class C fires are fires that involve energized
            electrical equipment.
          </ExtinguisherClassDescription>
        </ExtinguisherClass>
        <ExtinguisherClass>
          <ExtinguisherClassTitle>Class D</ExtinguisherClassTitle>
          <ExtinguisherClassDescription>
            A fire extinguisher labeled with letter &quot;D&quot; is for use on
            Class D fires. Class D fires are fires that involve combustible
            metals such as magnesium, titanium and sodium.
          </ExtinguisherClassDescription>
        </ExtinguisherClass>
        <ExtinguisherClass>
          <ExtinguisherClassTitle>Class K</ExtinguisherClassTitle>
          <ExtinguisherClassDescription>
            A fire extinguisher labeled with letter &quot;K&quot; is for use on
            Class K fires. Class K fires are fires that involve vegetable oils,
            animal oils, or fats in cooking appliances. This is for commercial
            kitchens, including those found in restaurants, cafeterias, and
            caterers.
          </ExtinguisherClassDescription>
        </ExtinguisherClass>
      </InfoGroup>

      <InfoGroup>
        <InfoTitleGroup>
          <InfoTitle>
            How do I pick the right type of fire extinguisher?
          </InfoTitle>
        </InfoTitleGroup>
        <InfoSubtitle>
          Type ABC Extinguishers are for use with Class A, B and C Fires.
        </InfoSubtitle>
        <InfoSubtitle>
          Type BC Extinguishers are for use with Class B and C Fires.
        </InfoSubtitle>
        <InfoSubtitle>Type K Extinguishers are for Class K Fires.</InfoSubtitle>
      </InfoGroup>

      <InfoGroup>
        <InfoTitleGroup>
          <InfoTitle>How to Use a Fire Extinguisher</InfoTitle>
        </InfoTitleGroup>
        <InfoDescription>
          Pull the pin at the top of the extinguisher. The pin releases a
          locking mechanism and will allow you to discharge the extinguisher.
        </InfoDescription>
        <InfoDescription>
          Aim at the base of the fire, not the flames. This is important - in
          order to put out the fire, you mush extinguish the fuel.{' '}
        </InfoDescription>
        <InfoDescription>
          Squeeze the lever slowly. This will release the the extinguishing
          agent in the extinguisher. If the handle is released, the discharge
          will stop.
        </InfoDescription>
        <InfoDescription>
          Sweep from side to side. Using a sweeping motion, move the fire
          extinguisher back and forth until the fire is completely out. Operate
          the extinguisher from a safe distance, several feet away, and then
          move towards the fire once it starts to diminish. Be sure to read the
          instructions on your fire extinguisher - different fire extinguishers
          recommend operating them from different distances. Remember: Aim at
          the base of the fire, not at the flames!!!
        </InfoDescription>
      </InfoGroup>

      <InfoGroup>
        <InfoTitleGroup>
          <InfoTitle>UL300 Wet Chemical Systems</InfoTitle>
        </InfoTitleGroup>
        <InfoDescription>
          In November, 1994, Underwriters Laboratories (UL) published UL 300 --
          the stringent new testing requirements for manufacturers of kitchen
          hood and duct fire protection systems. These requirements were driven
          by the fact that many restaurant owners had installed new, high
          efficiency burners that heated cooking oils to higher temperatures
          than in the past, and installed new fryers with better insulation that
          reduced the cooling rate of oils thus keeping them above their
          auto-ignition point for a longer time. The obvious result was more
          kitchen fires. The new standard for testing mandates tougher, more
          realistic tests for fryers, ranges, griddles, certain types of
          broilers and new woks.
        </InfoDescription>
      </InfoGroup>

      <InfoGroup>
        <InfoTitleGroup>
          <InfoTitle>Kitchen System Manufacturers Comply:</InfoTitle>
        </InfoTitleGroup>
        <InfoDescription>
          The manufacturers of kitchen fire suppression systems were required to
          redesign and re-test all of their systems in order to comply with UL
          300s standards. None of the existing dry chemical systems could pass
          the new testing requirements. Most wet chemical systems failed as
          well. Only wet chemical systems with increased flow rates, additional
          flow points and increased agent capacity have been able to meet UL 300
          standards.
        </InfoDescription>
      </InfoGroup>

      <InfoGroup>
        <InfoTitleGroup>
          <InfoTitle>What Does This Mean to You?</InfoTitle>
        </InfoTitleGroup>
        <InfoDescription>
          As an owner of a restaurant, you should seriously consider upgrading
          to the new UL 300 standard since your current system(s) most likely do
          not adequately protect your cooking area(s). In addition, area fire
          marshals have agreed that any new system installed after April 1,
          1995, must meet the new UL 300 standard which will likely require an
          additional cost for you. Also, any current system(s) to which new
          appliances have been added will require a complete system upgrade to
          meet the new UL 300 standards.
        </InfoDescription>
        <InfoDescription>
          New wet chemical systems installed after November 20, 1994, are the
          only systems that are acceptable. If your system was installed prior
          to November 20, 1994, we strongly recommend replacement with a new UL
          300 compliant wet chemical kitchen fire suppression system.
        </InfoDescription>
        <InfoDescription>
          If your kitchen is currently protected by a non-UL 300 compliant fire
          suppression system, ABT would appreciate the opportunity to work with
          you to install an effective, new system that will be complaint with
          all local fire codes.
        </InfoDescription>
      </InfoGroup>

      <Link href="/contact">
        <InfoLink>Contact us for a free price quote</InfoLink>
      </Link>
    </ResourcesComponent>
  );
}
