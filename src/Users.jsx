import { Heading,Box, Flex ,Text} from '@chakra-ui/react';
import React from 'react';
import {useSelector} from 'react-redux';

export default function Users(){
    const users=useSelector((state)=>state.userinfo.users)
    let len=users.length
    console.log("user==>",users)
    return(
        <div>
            {
                users.length>0?<Heading>User Details</Heading>:<></>
            }
            <Flex gap="4" direction="column">
            {
                users.map((item)=>{
                    
                    return(
                       
                            <Box pl="4" background={'blackAlpha.500'}>
                                <Text color={'blackAlpha.200'}>Name: {item.fullname}</Text>
                                <Text color={'blackAlpha.200'} >Age: {item.age}</Text>
                                <Text color={'blackAlpha.200'}>Email: {item.email}</Text>
                            </Box>
                       
                    )
                    
                })
            }
            </Flex>
            
        </div>
    );
}