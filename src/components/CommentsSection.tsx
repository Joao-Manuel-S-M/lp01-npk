const comments = [
  {
    initial: "R",
    name: "Rebeca Dias",
    text: "Será que o NPK Natural funciona mesmo em vasos e apartamentos? Sempre achei que só dava pra ter frutas se tivesse quintal…",
  },
  {
    initial: "C",
    name: "Carol Santana",
    text: "Minha jabuticabeira só dá frutos pequenos e sem brilho. O NPK Natural realmente faz diferença no tamanho e cor dos frutos?",
  },
  {
    initial: "R",
    name: "Roberto Motta",
    text: "Impressionante! Nunca imaginei que com o NPK Natural conseguiria colher frutas tão rápido aqui em casa. Obrigado de coração!",
  },
  {
    initial: "C",
    name: "Cleiton Rodrigo",
    text: "Não sabia que dava pra acelerar a frutificação de forma natural! Vou testar o NPK Natural, obrigado pela dica.",
  },
  {
    initial: "M",
    name: "Maria Donizette",
    text: "Isso é só pra quem tem experiência com jardinagem ou qualquer um consegue fazer? Eu to realmente querendo tentar",
  },
  {
    initial: "R",
    name: "Rosana Lopes",
    text: "Eu fazia isso, mas totalmente errado, não fazia ideia da diferença de direcionar esses nutrientes para os frutos. Deus abençoe.",
  },
];

const CommentsSection = () => {
  return (
    <div className="px-4 pb-8">
      <div className="space-y-4">
        {comments.map((comment, i) => (
          <div key={i} className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-channel-blue flex items-center justify-center">
              <span className="text-foreground text-xs font-semibold">
                {comment.initial}
              </span>
            </div>
            <div>
              <span className="text-muted-foreground text-xs font-medium">
                {comment.name}
              </span>
              <p className="text-foreground text-sm leading-snug mt-0.5">
                {comment.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
