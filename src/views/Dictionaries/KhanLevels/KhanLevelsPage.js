import React from 'react';
import AddButton from '../../Components/Buttons/AddButton';
import Page from '../../../components/Page/Page';
import PageHeader from '../../../components/Page/PageHeader';
import PageContent from '../../../components/Page/PageContent';
import Right from '../../../components/Common/Right';
import KhanLevelsTable from '../../../components/Dictionaries/KhanLevels/KhanLevelsTable';

const KhanLevelsView = props => {
    return (
        <Page>
            <PageHeader>
                Levels
                <Right>
                    <AddButton click={props.actions.addClick} />
                </Right>
            </PageHeader>
            <PageContent>
                <KhanLevelsTable levels={props.levels}  actions={props.actions}/>
            </PageContent>
        </Page>
    );
};

export default KhanLevelsView;
