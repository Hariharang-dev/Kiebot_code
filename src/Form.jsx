import {Box,Heading,Container,Center,Button,ButtonGroup,Input,Flex,Spacer, Stack,VStack,} from "@chakra-ui/react";
import { FormControl,FormLabel,FormErrorMessage,FormHelperText,FormErrorIcon} from "@chakra-ui/form-control";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import USERS from "./Users"
import { setUsers } from "./Slices/Userslice";
export default function Form() {
  const{register,handleSubmit,formState:{errors}}=useForm();
  const dispatch=useDispatch()
  function onformsubmit(data){
     dispatch(setUsers(data))
  }
  console.log(errors)
  return (
    <div>
      <center><Heading>Form using Chakra UI , React Hook Form & Redux</Heading></center>
      <Center h="100vh">
      <Container h="500px" w="450px" bgColor="rgba(0, 0, 0, 0.06)">
        <form onSubmit={handleSubmit(onformsubmit)}>
          <Stack pt="20px" align='stretch' spacing="7">
            <FormControl isInvalid={true}>
              <FormLabel color="rgba(0, 0, 0, 0.92)">Full name</FormLabel>
              <Input placeholder="Enter the fullname..."type="fullname" {...register("fullname",{required:"name is required" })} />
              <FormErrorMessage fontSize="sm"color="red">{errors?.fullname && errors.fullname.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={true}>
              <FormLabel color="rgba(0, 0, 0, 0.92)" >Age</FormLabel>
              <Input placeholder="Enter the age..." type="age" {...register("age",{required:{value:true,message:"age is required"},min:{value:18,message:"Age must be greater than 18"}})} />
              <FormErrorMessage fontSize="sm"color="red">{errors?.age && errors.age.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={true}>
              <FormLabel color="rgba(0, 0, 0, 0.92)">Email address</FormLabel>
              <Input placeholder="Enter the email..." type="email" {...register("email",{required:"mail is required"})}/>
              <FormErrorMessage fontSize="sm"color="red">{errors?.email && errors.email.message}</FormErrorMessage>
            </FormControl>
            <Button colorScheme='red' type="submit">Submit</Button>
            <USERS/>
          </Stack>
        </form>
      
      </Container>
    </Center>
    </div>
    
  );
}
