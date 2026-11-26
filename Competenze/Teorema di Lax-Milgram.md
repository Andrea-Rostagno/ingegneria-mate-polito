---
tipo: competenza
area: analisi
corsi: [Analisi funzionale, Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["Lax-Milgram theorem", "Lax-Milgram", "soluzione debole", "weak solution", "formulazione variazionale"]
tags: [competenza, area/analisi]
---

# Teorema di Lax-Milgram

> Generalizza Riesz-Fréchet: ogni funzionale continuo su uno spazio di Hilbert si rappresenta in modo unico tramite una forma sesquilineare continua e coerciva, anche non hermitiana.

## Definizione / enunciato
**Teor. 8.29.** Sia $H$ di Hilbert e $F:H\times H\to\mathbb F$ una forma sesquilineare continua e coerciva ($F(x,x)\ge m\|x\|^2$). Allora per ogni $\varphi\in H'$ esiste un unico $y\in H$ tale che
$$\varphi=F(\cdot,y),\qquad\text{cioè}\quad\varphi(x)=F(x,y)\ \ \forall x\in H.$$

## Formule chiave
Dimostrazione: $F^*(x,y)=\overline{F(y,x)}$ è ancora continua e coerciva, quindi $F^*=F_A$ con $A\in\mathcal B(H)$ isomorfismo (Prop. 8.25, 8.27); allora $F(x,y)=\langle x,Ay\rangle$ e l'equazione diventa $\varphi=\Phi(Ay)$, cioè
$$y=A^{-1}\Phi^{-1}(\varphi),$$
con $\Phi$ l'anti-isomorfismo di Riesz-Fréchet.

## Intuizione
Se $F$ è il prodotto scalare si ritrova Riesz-Fréchet. La coercività sostituisce la definita positività: garantisce che l'operatore associato alla forma sia invertibile con inverso limitato, quindi che la soluzione esista, sia unica e dipenda con continuità dal dato.

## Come si usa
Esistenza di soluzioni deboli di equazioni differenziali (Oss. 8.30): $-u''+Vu=h$ si riscrive come $\langle\phi',u'\rangle+\langle\phi,Vu\rangle=\langle\phi,h\rangle$ per ogni $\phi$ test; con $F(\phi,u)=\langle\phi',u'\rangle+\langle\phi,Vu\rangle$ e $\varphi=\langle\cdot,h\rangle$ ci si riduce all'equazione $\varphi=F(\cdot,u)$ di Lax-Milgram, in un opportuno spazio di Hilbert (dettagli dello spazio non specificati nelle note).

## Nei corsi
- **Analisi funzionale** (triennale): §8.4 (Teor. 8.29 con dimostrazione, Oss. 8.30). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 125-126); `triennale/ANNO 3/analisi funzionale/07_duale_handout.pdf` (p. 9).
- **Equazioni alle derivate parziali** (triennale): Evans §6.2.1, versione reale con forma bilineare. Teor. 1: $H$ di Hilbert reale, $B:H\times H\to\mathbb R$ bilineare con $|B[u,v]|\le\alpha\|u\|\|v\|$ e $\beta\|u\|^2\le B[u,u]$; per ogni $f\in H'$ esiste un unico $u\in H$ con $B[u,v]=\langle f,v\rangle$ per ogni $v$. Dimostrazione: $B[u,v]=(Au,v)$ con $A$ limitato (Riesz), $\beta\|u\|\le\|Au\|$ dà $A$ iniettivo con immagine chiusa, e $R(A)=H$ perché un $w\in R(A)^\perp$ darebbe $\beta\|w\|^2\le B[w,w]=0$. Oss.: se $B$ è simmetrica basta Riesz col prodotto scalare $((u,v))=B[u,v]$. Applicato a $B_\mu=B+\mu(\cdot,\cdot)$ su $H^1_0(U)$ dà la soluzione debole dei problemi ellittici. Fonti: `triennale/ANNO 3/eq derivate parziali/partial-differential-equations-by-evans.pdf` (pp. 297-299, 301).

## Prerequisiti
- [[Teorema di rappresentazione di Riesz-Fréchet]]: rappresentazione dei funzionali
- [[Forma sesquilineare]]: forma continua e coerciva
- [[Operatore coercivo in norma]]: l'operatore associato è invertibile

## Porta a
- [[Formulazione debole di un problema ellittico]]: risolve il problema $B[u,v]=\langle f,v\rangle$ in $H^1_0$ (Equazioni alle derivate parziali)
- [[Stime dell'energia per operatori ellittici]]: primo teorema di esistenza per $Lu+\mu u=f$ (Equazioni alle derivate parziali)

## Collegati
- [[Problema ai limiti]]: le equazioni differenziali si trattano in forma debole
- [[Derivata distribuzionale]]: la forma debole sposta le derivate sulle funzioni test
