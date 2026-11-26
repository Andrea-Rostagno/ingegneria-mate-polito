---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni topologia]
livello: [triennale]
aliases: ["quotient topology", "spazio quoziente", "quotient space", "spazio topologico quoziente", "proiezione sul quoziente", "insieme saturo", "saturato", "relazione di equivalenza aperta", "open equivalence relation", "X/E"]
tags: [competenza, area/algebra-geometria]
---

# Topologia quoziente

> Dati uno spazio topologico e una relazione di equivalenza, l'insieme quoziente riceve la topologia più fine che rende continua la proiezione: è lo strumento per "incollare" punti (segmento → circonferenza, sfera → spazio proiettivo).

## Definizione / enunciato
Sia $R$ una relazione di equivalenza su $(X,\tau)$ e $\pi:X\to X/R$, $\pi(p)=[p]$. Il **saturato** di $E$ è $\mathrm{sat}(E)=\bigcup_{p\in E}[p]=\pi^{-1}(\pi(E))$; $E$ è **saturo** se $E=\mathrm{sat}(E)$ (Def. 7.1-7.2). Per $E\subseteq X$, $R_E$ identifica tutti i punti di $E$ e $X/E$ indica $X/R_E$.

La **topologia quoziente** è
$$\tau/R=\{A\subseteq X/R\mid\pi^{-1}(A)\in\tau\},$$
la topologia più fine per cui $\pi$ è continua (§7.2).

**Prop. 7.4.** $A\in\tau/R$ se e solo se $A=\pi(B)$ con $B\in\tau$ saturo.
**Prop. 7.5.** Se $X$ è compatto (connesso), anche $X/R$ lo è.
**Prop. 7.7.** Se $X$ è di Hausdorff, $X/R$ è di Hausdorff se e solo se due punti non equivalenti hanno intorni **saturi** disgiunti.

## Formule chiave
$R$ è **aperta** se $\pi$ è un'applicazione aperta (Def. 7.21), e (Prop. 7.22)
$$R\ \text{aperta}\iff A\in\tau\Rightarrow\mathrm{sat}(A)\in\tau.$$
**Prop. 7.23.** Con $(p_1,p_2)R(q_1,q_2)\iff p_1R_1q_1,\ p_2R_2q_2$, $(X_1\times X_2)/R$ è omeomorfo a $X_1/R_1\times X_2/R_2$. L'enunciato stampato non dice che $R_1,R_2$ sono aperte, ma la dimostrazione lo usa ("$\pi_1(A_1)\times\pi_2(A_2)$ è un aperto per ipotesi"), e la proposizione sta nel paragrafo sulle relazioni aperte.

## Intuizione
Un aperto del quoziente è un aperto di $X$ che non separa punti equivalenti (saturo). Per questo il quoziente eredita compattezza e connessione (immagini continue), ma non la proprietà di Hausdorff, che dipende da quanto "bene" si separano le classi.

## Come si usa
- Retta con l'origine doppia: le due rette $y=\pm1$ con $(x,1)\sim(x,-1)$ per $x\neq0$ danno un quoziente non di Hausdorff (Es. 7.6).
- $\pi$ non è in generale aperta: in $[0,1]/\{0,1\}\simeq S^1$ l'aperto $[0,\frac12)$ va in un arco semichiuso (§7.5).
- $\mathbb R$ con $x\sim x'\iff x'-x\in\mathbb Z$ e $\mathbb R$ con $y\sim\pm y$ sono relazioni aperte; i quozienti sono $S^1$ e $[0,+\infty)$, quindi $\mathbb R^2/R\simeq S^1\times[0,+\infty)$ (Es. 7.24).

## Nei corsi
- **Istituzioni topologia** (triennale; materiale della cartella ANNO 3/istituzioni): cap. 7 "Spazi quoziente" delle note di topologia. Fonti: `triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf` (§7.1-7.2 e §7.5, Def. 7.1-7.2, Prop. 7.4-7.7, Def. 7.21, Prop. 7.22-7.23, Es. 7.6 e 7.24, pp. 52-53, 56-57); `triennale/ANNO 3/istituzioni/topologia/Pejsachwicz (1).pdf` (§7.3 "Topologia finale, topologia quoziente").

## Prerequisiti
- [[Relazione di equivalenza]]: classi, partizione e insieme quoziente
- [[Spazio topologico]]: topologia sullo spazio di partenza

## Porta a
- [[Funzione compatibile con una relazione di equivalenza]]: funzioni definite sul quoziente
- [[Spazio proiettivo reale]]: quoziente della sfera per x ∼ −x

## Collegati
- [[Spazio di Hausdorff]]: criterio con intorni saturi
- [[Spazio connesso]]: il quoziente di un connesso è connesso
- [[Sottogruppo normale e gruppo quoziente]]: analogo algebrico del passaggio al quoziente
- [[Anello quoziente]]: altro quoziente per una relazione di equivalenza compatibile
