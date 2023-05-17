import OptionItem from "../optionItem/optionItem";
import { typeChange, componentSelector } from '../../../store/slices/itemChannelSlices';
import { useAppSelector, useAppDispatch } from '../../../store/configStore/hooks';

const createElemForDataList = (array = []) => {
    const dataListElements = array.map((item, i) => {
        return (
            < OptionItem key={i} item={item} />
        )
    })
    return dataListElements;
}


const InputComponent = ({ defPlaceholder, value, idDataList, listParams, updateValue }) => {
    const optionElem = createElemForDataList(listParams),
        idDataListWithID = idDataList;
    const dispatch = useAppDispatch();
    return (
        <>
            <input
                list={idDataListWithID}
                placeholder={defPlaceholder}
                defaultValue={value}
                onChange={(e) => { dispatch(updateValue(e.target.value)) }}
            />
            <datalist id={idDataListWithID}>
                {optionElem}
            </datalist>
        </>
    )
}

export default InputComponent;
