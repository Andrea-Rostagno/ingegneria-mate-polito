---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni topologia]
livello: [triennale]
aliases: ["function compatible with an equivalence relation", "funzione compatibile", "funzione totalmente compatibile", "funzione quoziente", "passaggio al quoziente", "proposizione sulle funzioni compatibili", "funzione bi-compatibile", "f_R"]
tags: [competenza, area/algebra-geometria]
---

# Funzione compatibile con una relazione di equivalenza

> Una funzione costante sulle classi di equivalenza "passa al quoziente": la funzione indotta è continua quando lo è quella di partenza, e con compattezza e Hausdorff diventa un omeomorfismo.

## Definizione / enunciato
$f:X\to Y$ è **compatibile** con $R$ se $pRq\Rightarrow f(p)=f(q)$, **totalmente compatibile** se $pRq\iff f(p)=f(q)$ (Def. 7.8). In tal caso è definita la **funzione quoziente**
$$f_R:X/R\to Y,\qquad f_R([p])=f(p),\qquad f_R\circ\pi=f.$$

**Proposizione 7.9.** Sia $f$ compatibile con $R$.
1. $f_R$ è suriettiva $\iff f$ è suriettiva; $f_R$ è iniettiva $\iff f$ è totalmente compatibile.
2. $f:(X,\tau)\to(Y,\tau')$ è continua $\iff f_R:(X/R,\tau/R)\to(Y,\tau')$ è continua; $f_R$ è aperta $\iff f$ manda aperti saturi in aperti.

**Corollario 7.10.** Se $f$ è continua, totalmente compatibile e $Y$ è di Hausdorff, allora $X/R$ è di Hausdorff ($f_R$ è continua e iniettiva).

## Formule chiave
Continuità: per $A\in\tau'$,
$$f^{-1}(A)=\pi^{-1}\big(f_R^{-1}(A)\big)\in\tau\ \Longrightarrow\ f_R^{-1}(A)\in\tau/R.$$
**Schema per gli omeomorfismi.** Se $f:X\to Y$ è continua, suriettiva, totalmente compatibile, $X$ è compatto e $Y$ è di Hausdorff, allora $f_R$ è biunivoca e continua da un compatto a un Hausdorff, quindi un omeomorfismo (Prop. 5.16).
**Prop. 7.12.** Se $X/R$ è di Hausdorff e un compatto $K\subseteq X$ incontra ogni classe, $X/R$ e $K/R$ sono omeomorfi; senza Hausdorff è falso (Es. 7.13).

## Intuizione
La proprietà universale del quoziente: per definire una funzione continua su $X/R$ basta una funzione continua su $X$ che non distingua punti equivalenti. La totale compatibilità dice che $f$ identifica esattamente i punti che $R$ identifica.

## Come si usa
- $f(t)=(\cos2\pi t,\sin2\pi t)$ su $I=[0,1]$ è continua, suriettiva e totalmente compatibile con $R_{\{0,1\}}$: quindi $I/\{0,1\}\simeq S^1$ (Es. 7.11).
- Con $x\sim x'\iff x'-x\in\mathbb Z$ la stessa $f$ su $\mathbb R$ mostra che $\mathbb R/R$ è di Hausdorff (Cor. 7.10); poiché $[0,1]$ incontra tutte le classi, $\mathbb R/R\simeq S^1$ (Es. 7.14).
- Versione per due relazioni (Def. 7.15, Prop. 7.16): se $pRq\Rightarrow f(p)R'f(q)$, $f$ induce $f_{R,R'}:X/R\to Y/R'$ con $f_{R,R'}\circ\pi=\pi'\circ f$.

## Nei corsi
- **Istituzioni topologia** (triennale; materiale della cartella ANNO 3/istituzioni): punto 15 della lista delle dimostrazioni per l'orale ("proposizione sulle funzioni compatibili", [F] Prop. 7.9). Fonti: `triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf` (§7.3, Def. 7.8 e 7.15, Prop. 7.9, Cor. 7.10, Prop. 7.12 e 7.16, Es. 7.11-7.14, pp. 53-55).

## Prerequisiti
- [[Topologia quoziente]]: aperti del quoziente come immagini di aperti saturi
- [[Funzione continua tra spazi topologici]]: continuità e apertura

## Porta a
- [[Spazio proiettivo reale]]: RP^1 ≅ S^1 e modelli equivalenti di RP^n

## Collegati
- [[Omeomorfismo]]: lo schema compatto-Hausdorff produce omeomorfismi
- [[Primo teorema di isomorfismo]]: stesso schema f = f̄ ∘ π per i gruppi
- [[Spazio topologico compatto]]: biiezione continua da un compatto a un Hausdorff
