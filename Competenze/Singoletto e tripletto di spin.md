---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["singlet and triplet states", "stato di singoletto", "singlet state", "stati di tripletto", "triplet states", "somma di due spin 1/2", "addition of two spins", "spin totale di due elettroni"]
tags: [competenza, area/fisica]
---

# Singoletto e tripletto di spin

> Due spin 1/2 si compongono in un tripletto ($j=1$, tre stati simmetrici) e in un singoletto ($j=0$, uno stato antisimmetrico).

## Definizione / enunciato
Con $\vec J=\vec S_a+\vec S_b$, $j_a=j_b=\frac12$, si ha $j=0$ oppure $j=1$. I quattro stati prodotto $|m_a\rangle|m_b\rangle$ si riorganizzano in:
- **singoletto** $j=0$, $m_j=0$: unico stato con $m_a=-m_b$, il segno relativo $\sigma=-1$ è fissato da $J^2|0,0\rangle=0$;
- **tripletto** $j=1$, $m_j=0,\pm1$: il segno $\nu=+1$ dello stato $m_j=0$ è fissato dall'ortogonalità al singoletto.

## Formule chiave
$$|1,+1\rangle=|+\tfrac12\rangle_a|+\tfrac12\rangle_b,\quad |1,0\rangle=\tfrac{1}{\sqrt2}\left(|+\tfrac12\rangle_a|-\tfrac12\rangle_b+|-\tfrac12\rangle_a|+\tfrac12\rangle_b\right),\quad |1,-1\rangle=|-\tfrac12\rangle_a|-\tfrac12\rangle_b$$
$$|0,0\rangle=\tfrac1{\sqrt2}\left(|-\tfrac12\rangle_a|+\tfrac12\rangle_b-|+\tfrac12\rangle_a|-\tfrac12\rangle_b\right)$$
Verifica: $J^2=J_3^2+J_+J_--\hbar J_3$; per $m_j=0$ basta $J_+J_-|0,0\rangle=0$. Simmetria: $\chi_{m,1}(1,2)=+\chi_{m,1}(2,1)$, $\chi_{0,0}(1,2)=-\chi_{0,0}(2,1)$.

## Intuizione
Lo scambio delle due particelle lascia invariato il tripletto e cambia segno al singoletto: è questo che, combinato con la parte spaziale, decide quali stati sono permessi a due fermioni identici.

## Come si usa
Si verifica l'azione degli operatori a scala: $J_+|1,-1\rangle=\hbar\sqrt2|1,0\rangle$ e $J_+|1,0\rangle=\hbar\sqrt2|1,1\rangle$ (`2022_QP.pdf` p. 149). Nell'atomo di elio la parte spaziale antisimmetrica va col tripletto (ortoelio) e quella simmetrica col singoletto (paraelio). In QM_notes il singoletto è l'esempio di stato **entangled** (non fattorizzabile) (`QM_notes3.pdf` pp. 52-53).

## Nei corsi
- **Quantum physics** (triennale): §12.3 e §15.2 della dispensa di V. Penna; §4.2.3 e cap. 5 delle note di M. Re Fiorentin. Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 148-149, 175-176); `triennale/ANNO 2/quantum phisics/QM_notes3.pdf` (pp. 50-53).

## Prerequisiti
- [[Composizione dei momenti angolari]]: caso j_a = j_b = 1/2
- [[Matrici di Pauli]]: azione di S± sugli stati di spin

## Porta a
- [[Atomo di elio]]: ortoelio (tripletto) e paraelio (singoletto)
- [[Disuguaglianza di Bell]]: il singoletto è lo stato entangled di EPR
- [[Teorema spin-statistica]]: funzioni d'onda di spin simmetriche e antisimmetriche

## Collegati
- [[Configurazione elettronica]]: due elettroni nello stesso orbitale hanno spin opposti (singoletto)
