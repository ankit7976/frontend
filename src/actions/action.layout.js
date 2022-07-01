import axios from "../helpers"
import { GetLayout } from "./constants";





export const GetLayoutACT = () => {
    return async dispatch => {

        const res = await axios.get(`/getLayout`)

        if (res.status == 201) {
            dispatch({
                type: GetLayout.GET_LAYOUT_SUCCESS,
                payload: res.data

            })
        }

    }
}