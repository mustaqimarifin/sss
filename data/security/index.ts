import allSecurity from './allSecurity';

function extractDescription({ description }) {
  return {
    description: description.length || description[0]
  };
}

export const descriptions = allSecurity.find(extractDescription);
