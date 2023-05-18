import OptionItem from "../optionItem/optionItem";
import { useAppDispatch } from '../../../store/configStore/hooks';
import { componentSelector } from "../../../store/slices/itemChannelSlices";
import { useSelector } from "react-redux";

const createElemForDataList = (array = []) => {
    const dataListElements = array.map((item, i) => {
        return (
            < OptionItem key={i} item={item} />
        )
    })
    return dataListElements;
}


const InputComponent = ({ defPlaceholder, value, idDataList, listParams, updateValue, id }) => {
    const optionElem = createElemForDataList(listParams),
        idDataListWithID = idDataList;
    const dispatch = useAppDispatch();

    return (
        <>
            <input
                list={idDataListWithID}
                placeholder={defPlaceholder}
                defaultValue={value}
                onChange={(e) => {
                    dispatch(updateValue({ id: id, value: e.target.value }));
                }}
            />
            <datalist id={idDataListWithID}>
                {optionElem}
            </datalist>
        </>
    )
}

export default InputComponent;
