import OptionItem from "../optionItem/optionItem";
import { useAppDispatch } from '../../../store/configStore/hooks';
import { componentSelector } from "../../../store/slices/itemChannelSlices";

const createElemForDataList = (array = []) => {
    const dataListElements = array.map((item, i) => {
        return (
            < OptionItem key={i} item={item} />
        )
    })
    return dataListElements;
}


const InputComponent = ({ defPlaceholder, defvalue, idDataList, listParams, updateValue, id }) => {
    const optionElem = createElemForDataList(listParams),
        idDataListWithID = idDataList;
    const dispatch = useAppDispatch();
    //console.log(`defvalue: ${defvalue}`)
    return (
        <>
            <input
                list={idDataListWithID}
                placeholder={defPlaceholder}
                value={defvalue}
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
