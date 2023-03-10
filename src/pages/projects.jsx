import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
// import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

const projects = [
  {
    name: 'Malaria Simulation',
    description:
      'I created an individual-based simulation of malaria using C++ and optimized it for speed. This simulation has gained recognition for its ability to track parasitemia levels, pharmacokinetics, pharmacodynamics, host immunity, variable biting rates, and multiple drug-resistant alleles. The model is open source and can be compiled for Mac/Linux/Windows from its source repository. The initial goal of this project was to evaluate the use of multiple first-line therapies (MFT) at a population level and its long-term health outcomes. Currently, I am working on subsequent phases of this modeling work, exploring optimal treatment course durations and introducing new antimalarial combinations into population-level use when they become available.',
    link: {
      href: 'https://github.com/maciekboni/PSU-CIDD-Malaria-Simulation',
      label: 'PSU-CIDD-Malaria-Simulation',
    },
    logo: logoPlanetaria,
  },
  {
    name: 'IBM Flu',
    description:
      'I developed a fast and optimized C++ program to simulate the transmission of flu within a population. The results of this simulation were applied in the publication, "Virulence attenuation during an influenza A/H5N1 pandemic."',
    link: { href: 'https://github.com/merlinvn/IbmFlu', label: 'github.com' },
    logo: logoAnimaginary,
  },
  {
    name: 'ili.vn',
    description:
      'In 2009, I created the backend for a website that monitors the incidence of ILI cases in Ho Chi Minh City, Vietnam. The system relied on doctors sending SMS messages to an Android phone, which then preprocessed the data before it was added to the database.',
    link: { href: '#', label: 'ili.vn' },
    logo: logoHelioStream,
  },
  {
    name: 'DCAT',
    description:
      'The Dengue Case and Treatment (DCAT) is a web-based application that allows hospitals to track and analyze dengue cases. It was built using Next.js, tRPC, Prisma, and Tailwind CSS, and provides an intuitive interface for healthcare professionals to manage patient data in real-time.',
    link: { href: 'dcat.oucru.org', label: 'DCAT' },
    logo: logoCosmos,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Nguyen Tran</title>
        <meta
          name="description"
          content="From Innovation to Impact: My Portfolio of Purpose-Driven Projects"
        />
      </Head>
      <SimpleLayout
        title="From Innovation to Impact: My Portfolio of Purpose-Driven Projects"
        intro=" I'm excited to share my portfolio of projects, which showcases some of the work that I'm most proud of. From developing an individual-based simulation for malaria research to creating a patient management website, my projects are driven by a desire to use technology to make a positive impact. Many of these projects are open-source, so if you see something that piques your interest, feel free to check out the code and contribute your ideas for improvement."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
