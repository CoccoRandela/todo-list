export default function addColor(priority) {
    switch(priority) {
        case 'low':
            return ({theme}) => 
            theme.colors.lowP
            ;
            break;
        case 'medium':
            return  ({theme}) => 
            theme.colors.medP
            ;
            break;
        case 'high':
            return  ({theme}) => 
            theme.colors.highP
            ;
            break;
    }
}