---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["Euler characteristic", "χ(S)", "V + F − S", "formula di Eulero per i poliedri", "Euler's polyhedron formula"]
tags: [competenza, area/algebra-geometria]
---

# Caratteristica di Eulero

> $\chi=V+F-S$ (vertici più facce meno spigoli) è un numero intero che non cambia deformando la superficie con continuità. Vale 2 per la sfera, 0 per il toro, $-2$ per ogni buco in più.

## Definizione / enunciato
Per un poliedro $Q$, con $V$ vertici, $F$ facce e $S$ spigoli:
$$\chi(Q)=V+F-S .$$
**Teorema (senza dimostrazione).** $\chi$ è un invariante topologico: superfici omeomorfe hanno la stessa caratteristica. Per una superficie si calcola quindi su un poliedro omeomorfo. A lezione omeomorfismo e invariante topologico sono citati ma non definiti.

## Formule chiave
- Tetraedro: $4+4-6=2$.
- Cubo: $8+6-12=2$.
- Tutti i poliedri convessi hanno $\chi=2$, quindi la sfera ha $\chi=2$.
- Toro: $\chi=0$.
- Con 2, 3, 4 buchi: $\chi=-2,-4,-6$, "e così via" ("si può dimostrare").

## Intuizione
Ogni buco toglie 2 alla caratteristica. Il numero non vede né le misure né la forma esatta, solo la "topologia". Con Gauss-Bonnet diventa il valore dell'integrale della curvatura gaussiana diviso per $2\pi$.

## Come si usa
- **Toro:** il docente usa un "poliedro non convesso" con un buco, come l'edificio del Pentagono o un prisma triangolare cavo, e lascia il conto "provate a farlo", che dà $\chi=0$.
- Serve a prevedere $\int_SK\,dS$ senza calcolare $K$: per la sfera $4\pi$, per il toro $0$.

## Nei corsi
- **Geometria differenziale** (triennale): fonte `triennale/ANNO 2/geometria differenziale/Lezione27_GD.pdf` (pp. 4-9).

## Prerequisiti
- Nessuno.

## Porta a
- [[Teorema di Gauss-Bonnet]]: ∫K dS = 2πχ(S)

## Collegati
- [[Curvatura gaussiana]]: Gauss-Bonnet lega χ all'integrale di K
- [[Sfera]]: χ(S²) = 2, come i poliedri convessi
- [[Grafo planare]]: in Matematica discreta la stessa formula $v-e+f=2$ vale per ogni rappresentazione planare di un grafo connesso, contando anche la faccia illimitata
- [[Omeomorfismo]]: χ è invariante per omeomorfismi, citato senza definizione (L27 pp. 6-7)
