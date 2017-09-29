import React from "react"
import Link from "gatsby-link"
import Section from "grommet/components/Section"
import Heading from "grommet/components/Heading"
import Paragraph from "grommet/components/Paragraph"
import CodeSnippet from "../components/CodeSnippet/CodeSnippet"

const IndexPage = () =>
  <div>
    <Heading>React Devicon</Heading>
    <Section>
      <Paragraph size={"large"}>
        <strong>React Devicon </strong>is a React implementation of the{" "}
        <a target={"_blank"} href={"https://github.com/konpa/devicon"}>
          Devicon
        </a>{" "}
        package, a library of icons representing programming languages, as well
        as design and development tools.{" "}
      </Paragraph>

      <Paragraph size={"large"}>
        React Devicon includes all of the SVG icons of the original package
        exported as individual React components. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Paragraph>
    </Section>

    <Section>
      <Heading tag={"h2"}>Installation</Heading>
      <Paragraph size={"large"}>Install this package using NPM:</Paragraph>
      <CodeSnippet className={"bash"}>
        npm install 'react-devicon' --save
      </CodeSnippet>
      <Paragraph size={"large"}>Or Yarn:</Paragraph>
      <CodeSnippet className={"bash"}>yarn add 'react-devicon'</CodeSnippet>
    </Section>

    <Section>
      <Heading tag={"h2"}>Usage</Heading>
      <Paragraph size={"large"}>
        Import each icon component from its respective module. You can find the
        paths for all the modules of every icon looking at the documentation on
        this site. Please note that every icon has at least two or more
        different versions.
      </Paragraph>

      <Paragraph size={"large"}>
        Each icon component exposes two props: <strong>width</strong> and{" "}
        <strong>height</strong>. You can enter either a string (i.e. "10em",
        "100px", etc) or an integer, which will be automatically converted to
        pixels.
      </Paragraph>
      <CodeSnippet className={"javascript"}>
        {`
  import IconAmazonwebservices from 'react-devicon/amazonwebservices/original'

  export default () => (
    <div>
      <IconAmazonwebservices width={100} height={100}/>
    </div>
    )
          `}
      </CodeSnippet>
    </Section>

    <Section>
      <Heading tag={"h2"}>Caveats</Heading>
      <Paragraph size={"large"}>
        This package leverages{" "}
        <a
          target={"_blank"}
          href={"https://www.npmjs.com/package/react-svg-inline"}
        >
          react-svg-inline
        </a>{" "}
        behind the scenes, so, if you are using Webpack I would recommend
        installing{" "}
        <a target={"_blank"} href={"https://www.npmjs.com/package/raw-loader"}>
          raw-loader
        </a>{" "}
        to process your SVGs.
      </Paragraph>
    </Section>
  </div>

export default IndexPage
