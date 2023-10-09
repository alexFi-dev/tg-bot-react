import React from 'react'
import './mvp.css'

const MVP = (props) => {
    return (
        <div>
            <form>
                <table>
                <tbody>
                    <tr className="toprow">
                        <th></th>
                        <th>unwrapped</th>
                        <th>wrapped</th>              
                    </tr>
                    <tr>
                        <th>unstyled</th>
                        <td className="unwrap">
                        <select>
                            <option value="selectbox">select box</option>
                            <option value="option1">option 1</option>
                            <option value="option2">option 2</option>
                            <option value="option3">option 3</option>
                            <option value="optio4">option 4</option>
                        </select>
                        </td>
                        <td>
                        <select>
                            <option value="selectbox_1">select box</option>
                            <option value="option1_1">option 1</option>
                            <option value="option2_1">option 2</option>
                            <option value="option3_1">option 3</option>
                            <option value="optio4_1">option 4</option>
                        </select>
                        </td>
                    </tr>

                    <tr className="us-form">
                        <th>styled</th>
                        <td className="unwrap">
                        <select>
                            <option value="selectbox_2">select box</option>
                            <option value="option1_2">option 1</option>
                            <option value="option2_2">option 2</option>
                            <option value="option3_2">option 3</option>
                            <option value="optio4_2">option 4</option>
                        </select>
                        </td>
                        <td>
                        <span className="us-form-select-wrap">
                        <select>
                            <option value="selectbox_3">select box</option>
                            <option value="option1_3">option 1</option>
                            <option value="option2_3">option 2</option>
                            <option value="option3_3">option 3</option>
                            <option value="optio4_3">option 4</option>
                        </select>
                        </span>
                        </td>
                    </tr>
                    <tr className="us-form error">
                        <th>error</th>
                        <td className="unwrap">
                        <select disabled="disabled">
                            <option value="selectbox_4">select box</option>
                            <option value="option1_4">option 1</option>
                            <option value="option2_4">option 2</option>
                            <option value="option3_4">option 3</option>
                            <option value="optio4_4">option 4</option>
                        </select>
                        </td>
                        <td>
                        <span className="us-form-select-wrap">
                        <select disabled="disabled">
                            <option value="selectbox_5">select box</option>
                            <option value="option1_5">option 1</option>
                            <option value="option2_5">option 2</option>
                            <option value="option3_5">option 3</option>
                            <option value="optio4_5">option 4</option>
                        </select>
                        </span>
                        </td>
                    </tr>
                    <tr className="us-form">
                        <th>disabled</th>
                        <td className="unwrap">
                        <select disabled="disabled">
                            <option value="selectbox_6">select box</option>
                            <option value="option1_6">option 1</option>
                            <option value="option2_6">option 2</option>
                            <option value="option3_6">option 3</option>
                            <option value="optio4_6">option 4</option>
                        </select>
                        </td>
                        <td>
                        <span className="us-form-select-wrap">
                        <select disabled="disabled">
                            <option value="selectbox_7">select box</option>
                            <option value="option1_7">option 1</option>
                            <option value="option2_7">option 2</option>
                            <option value="option3_7">option 3</option>
                            <option value="optio4_7">option 4</option>
                        </select>
                        </span>
                        </td>
                    </tr>
                    <tr className="us-form darktest">
                        <th>on dark</th>
                        <td className="unwrap">
                        disabled="disabled"
                        </td>
                        <td>
                        <span className="us-form-select-wrap">
                        <select>
                            <option value="selectbox_8">select box</option>
                            <option value="option1_8">option 1</option>
                            <option value="option2_8">option 2</option>
                            <option value="option3_8">option 3</option>
                            <option value="optio4_8">option 4</option>
                        </select>
                        </span>
                        </td>
                    </tr>
                </tbody>
                </table>
            </form>
        </div>
    )
}

export default MVP