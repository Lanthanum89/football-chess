import type { Color, PieceSymbol } from 'chess.js'

const IMAGES = import.meta.glob<string>('../assets/football/*.png', {
  eager: true,
  import: 'default',
})

const src = (color: Color, type: PieceSymbol) => IMAGES[`../assets/football/${color}${type}.png`]

export default function Piece({
  type,
  color,
  className = '',
}: {
  type: PieceSymbol
  color: Color
  className?: string
}) {
  return (
    <img
      src={src(color, type)}
      alt=""
      draggable={false}
      className={`object-contain object-bottom drop-shadow-[0_3px_2px_var(--piece-shadow)] ${className}`}
    />
  )
}
