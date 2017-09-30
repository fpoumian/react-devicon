
import React from "react"
import { shallow, render } from "enzyme"
import SwiftPlainWordmark from "../index.js"

describe("SwiftPlainWordmark", () => {
  it("should contain one SVGInline element", () => {
    const wrapper = shallow(<SwiftPlainWordmark />)
    expect(wrapper.is("SVGInline")).toBe(true)
  })
  it("should accept width and height props as integer and convert them to pixels", () => {
    const wrapper = shallow(
      <SwiftPlainWordmark height={100} width={100} />
    )
    expect(wrapper.props().height).toEqual("100px")
    expect(wrapper.props().width).toEqual("100px")
  })

  it("should accept width and height props as string", () => {
    const wrapper = shallow(
      <SwiftPlainWordmark height={"10rem"} width={"10rem"} />
    )
    expect(wrapper.props().height).toEqual("10rem")
    expect(wrapper.props().width).toEqual("10rem")
  })

  it("should render a span element in DOM", () => {
    const wrapper = render(<SwiftPlainWordmark />)
    expect(wrapper.find("span")).toHaveLength(1)
    expect(wrapper.find("span").hasClass("SwiftPlainWordmark")).toBe(
      true
    )
  })
  it("should render an svg element in DOM", () => {
    const wrapper = render(<SwiftPlainWordmark />)
    expect(wrapper.find("svg")).toHaveLength(1)
  })
})

