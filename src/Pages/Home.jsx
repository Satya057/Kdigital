import { Box, Button, Container, Flex, Heading, Input, Select, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import ProductsTable from '../Components/ProductsTable';

const Home = () => {
  return (
    <Container>
        <Stack>
            {/* Top section */}
            <Flex>
                {/* Add products popup modal */}
                <Box>Add Product</Box>
                <Box>
                    <Heading>280/400</Heading>
                    <Text>Products</Text>
                </Box>
            </Flex>

            <Flex>
                <Input placeholder='Search Products ...' />
                <Button>Search</Button>
            </Flex>
            
            {/* Filter section */}
            <Flex>
                {/* part 1 */}
                <Flex>
                    <Flex>
                        <Select placeholder='Select option'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>

                        <Select placeholder='Select option'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>

                        <Button>Filter</Button>

                    </Flex>
                    
                    <Flex>
                        <Select placeholder='Select option'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                        <Button>Apply</Button>
                    </Flex>

                </Flex>
                
                

                {/* part 2 */}
                <Flex>
                    <Text>Products</Text>
                    <Select placeholder='Select option'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Flex>
                
            </Flex>


            <ProductsTable />
        </Stack>
        


    </Container>
  )
}

export default Home;