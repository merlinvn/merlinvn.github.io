import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

const publications = [
  {
    authors:
      'Nguyen TD*, Gao B*, Amaratunga C, Dhorda M, Tran TN-A, White NJ, Dondorp AM, Boni MF*, Aguas R*',
    title:
      'Preventing antimalarial drug resistance with triple artemisinin-based combination therapies',
    year: '2023',
    journal: 'Nature Communications (in review)',
    doi: '10.1101/2022.10.21.22281347',
    note: '*indicates equal contribution',
  },
  {
    authors: 'Zupko RJ, Nguyen TD, Wesolowski A, Gerardin J, Boni MF',
    title:
      'National-scale simulation of human movement in a spatially coupled individual-based model of malaria in Burkina Faso',
    year: '2023',
    journal: 'Scientific Report',
    doi: '10.1038/s41598-022-26878-5',
  },
  {
    authors:
      'Zupko RJ, Nguyen TD, Ngabonziza JCS, Kabera M, Li H, Tran TN-A, Tran TK, Uwimana A, Boni MF',
    title:
      'Potential policy interventions for slowing the spread of artemisinin-resistant pfkelch R561H mutations in Rwanda',
    year: '2022',
    journal: 'medRxiv',
    doi: '10.1101/2022.12.12.22283369',
  },
  {
    authors: 'Li EZ, Nguyen TD, Tran TN-A, Zupko RJ, Boni MF',
    title:
      'Assessing emergence risk of double-resistant and triple-resistant genotypes of Plasmodium falciparum',
    year: '2022',
    journal: 'bioRxiv',
    doi: '10.1101/2022.05.31.494246',
  },
  {
    authors:
      'Watson OJ*, Gao B*, Nguyen TD*, Tran TN-A, Penny MA, Smith DL, Okell L, Aguas R, Boni MF.',
    title:
      'Pre-existing partner-drug resistance facilitates the emergence and spread of artemisinin resistance: a consensus modelling',
    year: '2022',
    journal: 'The Lancet Microbe',
    doi: '10.1016/S2666-5247(22)00155-0',
    note: '*indicates equal contribution',
  },
  {
    authors:
      'Zupko RJ, Nguyen TD, Somé FA, Tran TN-A, Gerardin J, Dudas P, Giang DDH, Wesolowski A, Ouédraogo J-B, Boni MF.',
    title:
      'Long-term effects of increased adoption of artemisinin combination therapies in Burkina Faso',
    year: '2022',
    journal: 'PLOS Global Public Health',
    doi: '10.1371/journal.pgph.0000111',
  },
  {
    authors: 'Nguyen TD*, Tran TN-A*, Parker DM, White NJ, Boni MF.',
    title:
      'Antimalarial mass drug administration in large populations and the evolution of drug resistance',
    year: '2021',
    journal: 'bioRxiv (in review)',
    doi: '10.1101/2021.03.08.434496v1',
    note: '*indicates equal contribution',
  },
  {
    authors:
      'Vinh DN, Nhat NTD, de Bruin E, Vy NHT, Thao TTN, Phuong HT, Anh PH, Todd S, Quan TM, Thanh NTL, Lien NTN, Ha NTH, Hong TTK, Thai PQ, Choisy M, Nguyen TD, Simmons CP, Thwaites GE, Clapham HE, Chau NVV, Koopmans M, Boni MF.',
    title:
      'Age-seroprevalence curves for the multi-strain structure of influenza A virus',
    year: '2021',
    journal: 'Nature Communications',
    doi: '10.1038/s41467-021-26948-8',
  },
  {
    authors:
      'Goldlust SM, Thuan PD, Giang DDH, Thang ND, Thwaites GE, Farrar J, Thanh NV, Nguyen TD, Grenfell BT, Boni MF, Hien TT.',
    title: 'The decline of malaria in Vietnam, 1991-2014',
    year: '2018',
    journal: 'Malaria Journal',
    doi: '10.1186/s12936-018-2372-8',
  },
  {
    authors:
      'Lam HM, Wesolowski A, Hung NT, Nguyen TD, Nhat NTD, Todd S, Vinh DN, Vy NHT, Thao TTN, Thanh NTL, Tin PT, Minh NNQ, Bryant JE, Buckee CO, Ngoc TV, Chau NVV, Thwaites GE, Farrar J, Tam DTH, Vinh H, Boni MF',
    title:
      'Non-annual seasonality of influenza-like illness in a tropical urban setting.',
    year: '2018',
    journal: 'Influenza and Other Respiratory Viruses',
    doi: '10.1111/irv.12595',
  },
  {
    authors:
      'Tun STT, von Seidlein L, Pongvongsa T, Mayxay M, Saralamba S, Kyaw SS, Chanthavilay P, Celhay O, Nguyen TD, Tran TN-A, Parker DM, Boni MF, Dondorp AM, White LJ',
    title:
      'Towards malaria elimination in Savannakhet, Lao PDR: Mathematical modelling driven strategy design',
    year: '2018',
    journal: 'Malaria Journal',
    doi: '10.1186/s12936-017-2130-3',
  },
  {
    authors:
      'Nguyen TD, Olliaro P, Dondorp AM, Baird JK, Lam HM, Farrar J, Thwaites GE, White NJ, Boni MF',
    title:
      'Optimal population-level deployment of artemisinin combination therapies',
    year: '2015',
    journal: 'Lancet Global Health',
    doi: '10.1016/S2214-109X(15)00162-X',
  },
  {
    authors:
      'Peak C, Thuan PD, Britton A, Nguyen TD, Wolbers M, Thanh NV, Buckee CO, Boni MF',
    title:
      'Measuring the impact of artemisinin-based case management on malaria incidence in southern Vietnam, 1991-2010',
    year: '2015',
    journal: 'Am J Trop Med Hyg',
    doi: '10.4269/ajtmh.14-0461',
  },
  {
    authors: 'Boni MF, Nguyen TD, de Jong MD, van Doorn HR',
    title: 'Virulence attenuation during an influenza A/H5N1 pandemic',
    year: '2013',
    journal: 'Phil Trans R Soc B',
    doi: '10.1098/rstb.2012.0207',
    note: 'led and carried out individual-based model development for a hypothetical avian influenza pandemic ; paper was profiled in National Geographic and by the Wall Street Journal',
  },
  {
    authors:
      ' Hien TT, Boni MF, Bryant JE, Ngan TT, Wolbers M, Nguyen TD, Truong NT, Ha DQ, Hien VM, Nhu LNT, Thanh TT, Uyen LTT, Nhien PT, Chinh NT, Chau NVV, Farrar JJ, van Doorn HR',
    title:
      'Early Pandemic influenza (2009 H1N1) in Ho Chi Minh City, Vietnam: A Clinical Virological and Epidemiological Analysis',
    year: '2010',
    journal: 'PLoS Med',
    doi: '10.1371/journal.pmed.1000277',
  },
]

function PublicationSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

const Author = ({ author }) => {
  return author.includes('Nguyen TD') ? (
    <span className="font-bold">{author}</span>
  ) : (
    author
  )
}

const Publication = ({ title, authors, journal, cta, href, note }) => {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href} target="_blank">
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{journal}</Card.Eyebrow>
      <Card.Description>
        {authors
          .split(',')
          .map((author, author_i) => <Author key={author_i} author={author} />)
          .reduce((prev, curr) => [prev, ', ', curr])}
      </Card.Description>
      {note && <Card.Note>{note}</Card.Note>}
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}
const Publications = () => {
  return (
    <>
      <Head>
        <title>Publications - Tran Dang Nguyen</title>
        <meta
          name="description"
          content="I’ve spoken at events all around the world and been interviewed for many podcasts."
        />
      </Head>
      <SimpleLayout
        title="My Research in Mathematical Modeling of Infectious Diseases"
        intro="My work in mathematical modeling of infectious diseases focuses on developing and analyzing models that provide insights into the transmission, spread, and control of infectious diseases. Specifically, I utilize individual-based simulations to investigate disease dynamics and the impact of treatment strategies on drug resistance. Through my research, I aim to contribute to the development of effective and sustainable approaches to disease control.  This page provides a list of my publications and conferences where I have presented my research findings."
      >
        <div className="space-y-20">
          <PublicationSection title="Publications">
            {publications.map((publication, index) => (
              <Publication
                key={index}
                href={`https://doi.org/${publication.doi}`}
                title={`${publications.length - index}. ${publication.title}`}
                authors={publication.authors}
                journal={publication.journal}
                note={publication.note}
                cta="Read paper"
              />
            ))}
          </PublicationSection>
          <PublicationSection title="Presentations and Posters"></PublicationSection>
        </div>
      </SimpleLayout>
    </>
  )
}

export default Publications
