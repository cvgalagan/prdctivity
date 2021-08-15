import React from "react"
import { shallow } from "enzyme"
import Spinner from "./Spinner"

describe("Spinner", () => {
    it("should render", () => {
        const wrapper = shallow(<Spinner />)
        expect(wrapper).toMatchSnapshot()
    })
    it("should add 'indeterminate' modifier by default", () => {
        const wrapper = shallow(<Spinner />)
        const element = wrapper.find(".spinner").first()
        expect(element.hasClass("spinner_indeterminate")).toEqual(true)
    })
    it("should add 'static' modifier if variant is indeterminate", () => {
        const wrapper = shallow(<Spinner variant="indeterminate" />)
        const element = wrapper.find(".spinner").first()
        expect(element.hasClass("spinner_indeterminate")).toEqual(true)
    })
    it("should add 'static' modifier if variant is static", () => {
        const wrapper = shallow(<Spinner variant="static" />)
        const element = wrapper.find(".spinner").first()
        expect(element.hasClass("spinner_static")).toEqual(true)
    })
    it("should add 'disable-shrink' modifier if disableShrink is true", () => {
        const wrapper = shallow(<Spinner disableShrink />)
        const element = wrapper.find(".spinner").first()
        expect(element.hasClass("spinner_disable-shrink")).toEqual(true)
    })
})
