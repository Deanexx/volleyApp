import instance from "../../../server"
import { vote } from "../../../models/voteModel"

import { AppDispatch } from "../../store"
import { startFetching, fetchVotes, endFetching  } from "./sliceVote"

export const getVotes = () => async (dispatch: AppDispatch ) =>  {
        dispatch(startFetching());
        const { data, status }: {
            data: {
                status: string,
                data: vote[]
            }, 
            status: number
        } = await instance.get("votelist/allVotes")
        if(status === 200)
            dispatch(fetchVotes(data.data))
        dispatch(endFetching());
}