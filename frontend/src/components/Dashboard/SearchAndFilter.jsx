import { HStack, Input, InputGroup, InputLeftElement, Select } from '@chakra-ui/react';
import { Search } from 'lucide-react';
import React from 'react';

const SearchAndFilter = ({ searchTerm, setSearchTerm, sortBy, setSortBy, cardBg, primaryColor }) => (
  <HStack spacing={4} wrap="wrap">
    <InputGroup maxW="400px">
      <InputLeftElement pointerEvents="none">
        <Search color={primaryColor} size={20} />
      </InputLeftElement>
      <Input
        placeholder="Search courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        bg={cardBg}
      />
    </InputGroup>
    <Select
      maxW="200px"
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      bg={cardBg}
    >
      <option value="title">Sort by Title</option>
      <option value="price">Sort by Price</option>
    </Select>
  </HStack>
);

export default SearchAndFilter;
