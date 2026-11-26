---
tipo: competenza
area: analisi
corsi: [Analisi funzionale, Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["Ascoli-Arzelà theorem", "Arzelà-Ascoli theorem", "equicontinuità", "equicontinuity", "successione equicontinua"]
tags: [competenza, area/analisi]
---

# Teorema di Ascoli-Arzelà

> Criterio di compattezza nello spazio delle funzioni continue: una successione limitata ed equicontinua ha una sottosuccessione uniformemente convergente.

## Definizione / enunciato
Sia $M$ uno spazio metrico compatto e $(f_n)_n$ una successione in $C_{\mathbb F}(M)$. Se
(a) $(f_n)$ è **limitata**: $\displaystyle\sup_{n\in\mathbb N}\sup_{t\in M}|f_n(t)|<\infty$;
(b) $(f_n)$ è **equicontinua**:
$$\forall t\in M\ \forall\epsilon>0\ \exists\delta>0\ \forall n\in\mathbb N\ \forall t'\in M:\ d_M(t,t')<\delta\Rightarrow|f_n(t)-f_n(t')|<\epsilon,$$
allora $(f_n)$ ha una sottosuccessione convergente in $(C_{\mathbb F}(M),d_\infty)$ a qualche $f\in C_{\mathbb F}(M)$.

## Formule chiave
L'unica novità rispetto a Bolzano-Weierstrass è la condizione (b): il $\delta$ non dipende da $n$. La dimostrazione è omessa nelle note.

## Intuizione
In $C(M)$, che ha dimensione infinita, la limitatezza non basta per estrarre sottosuccessioni convergenti (la palla unitaria non è compatta, lemma di Riesz). L'equicontinuità impedisce alle funzioni di oscillare sempre più velocemente, ed è proprio la condizione aggiuntiva che serve.

## Come si usa
Nel corso serve a dimostrare che l'operatore integrale $T_K:C[c,d]\to C[a,b]$ con nucleo $K\in C([a,b]\times[c,d])$ è **compatto**: se $(f_n)$ è limitata, le funzioni $T_Kf_n$ sono limitate ed equicontinue (per la continuità uniforme di $K$ sul compatto), quindi Ascoli-Arzelà dà una sottosuccessione convergente (Es. 11.15).

## Nei corsi
- **Analisi funzionale** (triennale): Teor. 2.38 (§2.5, enunciato senza dimostrazione); ripreso nel §4.5 e nell'Es. 11.15. Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 21, 39, 168).
- **Equazioni alle derivate parziali** (triennale): §1.2 con dimostrazione. Lemma 1.2.5: su $(X,d)$ separabile una successione equicontinua e puntualmente limitata in $C^0(X)$ ha una sottosuccessione puntualmente convergente (argomento diagonale su un denso numerabile). Teor. 1.2.6: su $X$ compatto, uniformemente equicontinua ed equilimitata implica una sottosuccessione uniformemente convergente a $f\in C^0(X)$ (totale limitatezza e condizione di Cauchy in $\|\cdot\|_\infty$). Usato per i limiti deboli di armoniche (Lemma 3.1.13) e, in Evans, nella dimostrazione di Rellich-Kondrachov. Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 4-5, 22); `triennale/ANNO 3/eq derivate parziali/partial-differential-equations-by-evans.pdf` (p. 274).

## Prerequisiti
- [[Compattezza in spazi metrici]]: compattezza per successioni in C(M)
- [[Convergenza uniforme di successioni di funzioni]]: la convergenza in d∞
- [[Teorema di Heine-Cantor]]: continuità uniforme da cui nasce l'equicontinuità

## Porta a
- [[Operatore integrale]]: compattezza dell'operatore integrale su C[c,d]
- [[Convergenza di successioni di funzioni armoniche]]: limiti deboli in $L^1$ di armoniche (Equazioni alle derivate parziali)
- [[Teorema di Rellich-Kondrachov]]: compattezza delle regolarizzate (Equazioni alle derivate parziali)

## Collegati
- [[Operatore compatto]]: Ascoli-Arzelà è lo strumento per verificarlo in C(M)
- [[Lemma di Riesz]]: senza equicontinuità la compattezza fallisce
