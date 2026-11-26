---
tipo: competenza
area: analisi
corsi: [Analisi funzionale, Istituzioni topologia]
livello: [triennale]
aliases: ["open and closed sets in metric spaces", "palla aperta", "palla chiusa", "insieme aperto", "insieme chiuso", "chiusura", "closure", "parte interna", "frontiera", "insieme denso", "dense set", "insieme limitato in uno spazio metrico", "topologia di uno spazio metrico"]
tags: [competenza, area/analisi]
---

# Aperti e chiusi in uno spazio metrico

> La topologia indotta da una distanza: palle, aperti, chiusi, chiusura e densità, con le loro caratterizzazioni per successioni.

## Definizione / enunciato
In $(M,d)$: palla aperta $B(x,r)=\{y:d(x,y)<r\}$ e palla chiusa $\overline B(x,r)=\{y:d(x,y)\le r\}$. $E$ è **limitato** se $E\subseteq B(x_0,r)$ per qualche $x_0,r$. $A$ è **aperto** se per ogni $x\in A$ esiste $r>0$ con $B(x,r)\subseteq A$; $C$ è **chiuso** se $M\setminus C$ è aperto. Gli aperti formano una topologia (unioni arbitrarie e intersezioni finite).
- **Chiusura** $\overline E=\bigcap\{C\text{ chiuso}\supseteq E\}$, **parte interna** $\mathring E=\bigcup\{A\text{ aperto}\subseteq E\}$, **frontiera** $\partial E=\overline E\setminus\mathring E$.
- $E$ è **denso** in $M$ se $\overline E=M$.

## Formule chiave
$$C\text{ chiuso}\iff\big(x_n\in C,\ x_n\to x\Rightarrow x\in C\big)$$
$$\overline E=\{x:\ x=\lim x_n,\ x_n\in E\}=\{x\in M:\ d(x,E)=0\},\qquad d(x,E)=\inf_{y\in E}d(x,y)$$
$$M\setminus\mathring E=\overline{M\setminus E},\qquad E\text{ denso}\iff\forall x\in M\ \exists(x_n)\subseteq E:\ x_n\to x.$$

## Intuizione
Un chiuso contiene tutti i suoi "punti limite"; la chiusura aggiunge a $E$ i punti a distanza zero. Denso significa che ogni punto si approssima quanto si vuole con elementi di $E$: è la nozione chiave per approssimare funzioni (polinomi, funzioni continue, funzioni semplici).

## Come si usa
Per mostrare che un sottospazio non è chiuso si esibisce una successione al suo interno che converge fuori: i polinomi su $[a,b]$ non sono chiusi in $(C[a,b],\|\cdot\|_\infty)$ perché sono densi ma propri (Es. 4.17). Una successione converge a $x$ se e solo se entra definitivamente in ogni aperto che contiene $x$.

## Nei corsi
- **Analisi funzionale** (triennale): §2.4 (Def. 2.21, Prop. 2.23). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 16-18); `triennale/ANNO 3/analisi funzionale/02_spazimetrici_handout.pdf` (pp. 10-13).
- **Istituzioni topologia** (triennale; materiale della cartella ANNO 3/istituzioni): la topologia $\tau_d$ (Prop. 2.11) è il caso particolare degli spazi topologici. Le palle aperte sono aperte, $(X,\tau_d)$ è di Hausdorff e metriche equivalenti danno la stessa topologia (Prop. 2.12). Le palle formano una base, e le palle $B(p,1/n)$ una base di intorni numerabile (Prop. 2.19, 2.22). Chiusura nel caso metrico (§2.6): $p\in\overline E\iff$ esiste $p_n\in E$ con $p_n\to p\iff d(p,E)=0$ (Prop. 2.46-2.47). La palla chiusa $D(p,r)$ è chiusa, ma in generale $\overline{B(p,r)}\neq D(p,r)$ (con la metrica discreta $B(p,1)=\{p\}$, $D(p,1)=X$). In $\mathbb R^n$ invece vale l'uguaglianza (Es. 2.49). Fonti: `triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf` (§2.3, §2.6, pp. 15-19, 23-25); `triennale/ANNO 3/istituzioni/topologia/Pejsachwicz (1).pdf` (§4.3, §5.1, Teor. 5.17).

## Prerequisiti
- [[Spazio metrico]]: palle definite dalla distanza

## Porta a
- [[Compattezza in spazi metrici]]: i compatti sono chiusi e limitati
- [[Spazio separabile]]: densità di un sottoinsieme numerabile
- [[Omeomorfismo]]: la continuità si legge sugli aperti
- [[Lemma di Baire]]: intersezioni numerabili di aperti densi
- [[Sottospazi densi di Lp]]: densità di funzioni semplici e continue

## Collegati
- [[Punto di accumulazione]]: la chiusura contiene i punti di accumulazione
- [[Limiti e continuità in più variabili]]: stessa topologia in R^n con la metrica euclidea
- [[Spazio topologico]]: generalizzazione astratta degli aperti metrici (Istituzioni topologia)
- [[Chiusura e interno in uno spazio topologico]]: stesse nozioni senza distanza (Istituzioni topologia)
