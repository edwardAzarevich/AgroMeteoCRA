import OptionItem from "../optionItem/optionItem";

const createElemForDataList = (array = []) => {
    const dataListElements = array.map((item, i) => {
        return (
            < OptionItem key={i} item={item} />
        )
    })
    return dataListElements;
}


const InputComponent = ({defPlaceholder, value, idDataList, listParams }) => {
    const optionElem = createElemForDataList(listParams),
        idDataListWithID = idDataList;
    return (
        <>
            <input
                list={idDataListWithID}
                placeholder={defPlaceholder}
                defaultValue={value}
            />
            <datalist id={idDataListWithID}>
                {optionElem}
            </datalist>
        </>
    )
}

export default InputComponent;
