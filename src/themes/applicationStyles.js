import { fontFamilies } from './fonts'

export default {
    outer: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: '40px',
    },
    mainTextContainer: {
        // ...fontFamilies.comfortaa,
        maxWidth: 800,
        padding: 10,
        // TODO: sort this out. 90% is a hack
        width: '90%',
        margin: '0 auto',
        alignSelf: 'stretch',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },
}