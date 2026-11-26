---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["linear isometry", "isomorfismo isometrico", "isometric isomorphism", "spazi isometricamente isomorfi", "isometrically isomorphic"]
tags: [competenza, area/analisi]
---

# Isometria lineare

> Un operatore lineare che conserva la norma; se è anche biiettivo identifica due spazi normati senza perdere informazione (isomorfismo isometrico).

## Definizione / enunciato
$T\in\mathcal L(X,Y)$ è un'**isometria lineare** se $\|Tx\|_Y=\|x\|_X$ per ogni $x$, equivalentemente $\|Tx-Tx'\|_Y=\|x-x'\|_X$.
Proprietà (Prop. 7.16): $T$ è limitato con $\|T\|_{op}=1$ (se $X\ne\{0\}$), iniettivo; se suriettivo, $T^{-1}$ è un'isometria; composizione di isometrie è un'isometria.
Un **isomorfismo isometrico** è un'isometria lineare biiettiva; $X\cong_{isom.}Y$ se ne esiste uno (relazione di equivalenza).

## Formule chiave
In spazi pre-hilbertiani (Prop. 7.22): $T$ è un'isometria lineare $\iff\langle Tx,Tx'\rangle_2=\langle x,x'\rangle_1$ per ogni $x,x'$ (per polarizzazione).
Se $X\cong_{isom.}Y$ e $X$ è completo, anche $Y$ lo è.

## Intuizione
Un'isometria è un "cambio di nome" degli elementi che non altera alcuna distanza: tutte le proprietà metriche e lineari passano da uno spazio all'altro. Per questo si dice "il duale di $\ell^p$ è $\ell^q$": esiste un isomorfismo isometrico canonico.

## Come si usa
- $(\ell^p)'\cong\ell^q$, $(c_0)'\cong\ell^1$, $L^p(M)'\cong L^q(M)$: identificazioni dei duali tramite isomorfismi isometrici.
- Ogni Hilbert separabile di dimensione infinita è isometricamente isomorfo a $\ell^2$.
- L'immersione canonica $J:X\to X''$ è un'isometria lineare (non sempre suriettiva).
- Gli operatori unitari fra spazi di Hilbert sono esattamente gli isomorfismi isometrici.

## Nei corsi
- **Analisi funzionale** (triennale): §7.2 "Isometrie lineari" (Def. 7.15, Prop. 7.16, Def. 7.19, Prop. 7.22). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 99-102); `triennale/ANNO 3/analisi funzionale/06_operatorilimitati_handout.pdf` (pp. 8-9).

## Prerequisiti
- [[Operatore lineare limitato]]: un'isometria ha norma 1

## Porta a
- [[Spazio riflessivo]]: l'immersione canonica J è un'isometria
- [[Duale degli spazi Lp]]: identificazioni isometriche dei duali

## Collegati
- [[Trasformazione unitaria]]: unitario equivale a isomorfismo isometrico fra Hilbert
- [[Matrice ortogonale]]: isometrie lineari di R^n
- [[Identità del parallelogramma]]: la polarizzazione dà la conservazione del prodotto scalare
