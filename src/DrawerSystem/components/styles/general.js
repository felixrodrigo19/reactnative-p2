import metrics from './metrics';
import colors from './colors';
import fonts from './fonts';

const general = {
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  section: {
    margin: metrics.doubleBaseMargin,
  },
  sectionTitle: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: fonts.regular,
    alignSelf: 'center',
    marginBottom: metrics.doubleBaseMargin,
  },
  sectionInput: {
    fontWeight: 'bold',
    fontSize: fonts.regular,
    alignSelf: 'center',
    marginBottom: metrics.baseMargin,
    backgroundColor: colors.containerPrimary,
    borderRadius: 20,
    height: 30,
    width: '75%',
  },
  errors: {
    fontSize: fonts.tiny,
    color: colors.err,
    alignSelf: 'center',
    marginBottom: metrics.baseMargin,
  },
  logo: {
    fontSize: 24,
    color: '#2980B9',
    fontWeight: 'bold',
    flexDirection: 'row',
  },
  principal: {
    backgroundColor: colors.containerPrimary,
  },
  other: {
    backgroundColor: colors.otherbackground,
  },
  toolbar: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  status: {
    height: 40,
    //backgroundColor: colors.otherbackground,
    flexDirection: 'row',
    // alignItems: 'center',
  },
};

export default general;
