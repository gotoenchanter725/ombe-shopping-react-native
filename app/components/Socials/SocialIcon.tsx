import React from 'react';
import { TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/theme';

type Props = {
    icon ?: any; 
    color ?: string; 
    rounded ?: any; 
    square ?: any; 
    btnSm ?: any; 
    btnLg ?: any; 
}

const SocialIcon = ({icon, color, rounded, square, btnSm, btnLg} : Props) => {
    return (
        <>
            <TouchableOpacity
                style={[{
                    height:40,
                    width:40,
                    backgroundColor:color ? color : COLORS.primary,
                    borderRadius:square ? 0 : rounded ? 30 : 0,
                    alignItems:'center',
                    justifyContent:'center',
                    marginHorizontal:4,
                }, btnSm && {
                    height:35,
                    width:35,
                }, btnLg && {
                    height:45,
                    width:45,
                }]}
            >
                {icon}
            </TouchableOpacity>
        </>
    );
};


export default SocialIcon;