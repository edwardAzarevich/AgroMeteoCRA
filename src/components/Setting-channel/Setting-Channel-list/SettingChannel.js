import './settingChannel.scss';
import { Component } from 'react';
import { getSensorParams, getSettingParams } from '../../services/serviceForSetting';
import SettingChannelPages from '../settingChannelPages/settingChannelPages';



// Количество настраиваемых каналов (в дальнейшем переделать)
const nameChannel = [
    { numberChannel: 1 },
    { numberChannel: 2 },
    { numberChannel: 3 },
    { numberChannel: 4 },
    { numberChannel: 5 },
    { numberChannel: 6 },
    { numberChannel: 7 },
    { numberChannel: 8 },
    { numberChannel: 9 },
    { numberChannel: 10 },
];

// need code review
class SettingChannel extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        settingParams: {},
        error: false,
        loading: true
    }

    onReqForGetSaveParams = async () => {
        const configg = await getSettingParams();
        this.onParamsLeaded(configg);
        return configg;
    }
    componentDidMount() {
        this.onReqForGetSaveParams()
            .then((config) => {
                //console.log(config);
            })
    }

    onParamsLeaded = (params) => {
        this.setState({ settingParams: params });
    }

    //Creating an array with channel settings objects

    render() {
        let testBlock = this.state.settingParams;
        let configJSON = testBlock ? testBlock : '';
        const errorMassage = configJSON.block ? '' : 'Необходимо включить сервер для приема и сохранения данных';
        // !!!!!!! review
        return (
            <div>
                <div>
                    <SettingChannelPages />
                </div>
                <div className='status-server'>
                    {errorMassage}
                </div>
            </div >
        )
    }


}

export default SettingChannel;



