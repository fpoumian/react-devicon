import React from "react"
import Section from "grommet/components/Section"
import Heading from "grommet/components/Heading"
import Paragraph from "grommet/components/Paragraph"
import CodeSnippet from "../components/CodeSnippet/CodeSnippet"
import Anchor from "grommet/components/Anchor"
import DownloadIcon from "grommet/components/icons/base/Download"
import CodeIcon from "grommet/components/icons/base/Code"

const IndexPage = () =>
  <div>
    <Heading>React Devicon</Heading>
    <Section>
      <Paragraph size={"large"}>
        <strong>React Devicon </strong>is a React implementation of the{" "}
        <a target={"_blank"} href={"https://github.com/konpa/devicon"}>
          Devicon
        </a>{" "}
        package, a library that contains the logos of several programming
        languages, as well as of different design and development tools.{" "}
      </Paragraph>

      <Paragraph size={"large"}>
        React Devicon includes all of the SVG icons of the original package
        exported as individual React components.
      </Paragraph>
    </Section>

    <Section id={"install"}>
      <Heading tag={"h2"}>
        <Anchor href={"#install"} icon={<DownloadIcon />}>
          Installation
        </Anchor>
      </Heading>
      <Paragraph size={"large"}>Install this package using NPM:</Paragraph>
      <CodeSnippet className={"bash"}>
        npm install 'react-devicon' --save
      </CodeSnippet>
      <Paragraph size={"large"}>Or Yarn:</Paragraph>
      <CodeSnippet className={"bash"}>yarn add 'react-devicon'</CodeSnippet>
    </Section>

    <Section id={"usage"}>
      <Heading tag={"h2"}>
        <Anchor href={"#usage"} icon={<CodeIcon />}>
          Usage
        </Anchor>
      </Heading>
      <Paragraph size={"large"}>
        Import each icon component from its respective module. You can find the
        paths for all the modules of every icon looking at the documentation on
        this site. Please note that every icon typically has at least two or
        more different versions.
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
  </div>

export default IndexPage
