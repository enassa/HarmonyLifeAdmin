import useTypewriter from "react-typewriter-hook"
 
export const TextWriter = (word) => {
  const typing = useTypewriter(word)
  return typing
}
 