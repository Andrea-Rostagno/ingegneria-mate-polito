---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["mean value theorem for integrals", "media integrale"]
tags: [competenza, area/analisi]
---

# Teorema della media integrale

> La media integrale $\frac1{b-a}\int_a^bf$ sta tra inf e sup di $f$; se $f$ è continua, è assunta in un punto: $\int_a^bf=f(\xi)(b-a)$.

## Definizione / enunciato
La **media integrale** di $f$ integrabile su $[a,b]$ è (Morandotti, def. 5.2.5)
$$\mu=\frac1{b-a}\int_a^bf(x)\,dx .$$
**Teorema** (cor. 5.2.4). Se $f$ è integrabile e limitata, con $m=\inf_{[a,b]}f$ e $M=\sup_{[a,b]}f$,
$$m(b-a)\le\int_a^bf(x)\,dx\le M(b-a).$$
Se inoltre $f$ è continua, esiste $\xi\in[a,b]$ tale che
$$\int_a^bf(x)\,dx=f(\xi)(b-a).$$

## Formule chiave
$$\inf_{[a,b]}f\le\frac1{b-a}\int_a^bf\le\sup_{[a,b]}f,\qquad \exists\xi:\ f(\xi)=\frac1{b-a}\int_a^bf\quad(f\ \text{continua})$$

## Intuizione
Il rettangolo di base $b-a$ e altezza pari alla media ha la stessa area del sottografico; per una funzione continua quell'altezza è un valore effettivamente assunto (Weierstrass + valori intermedi).

## Come si usa
È il passo centrale della dimostrazione del teorema fondamentale: $\frac{F(x+h)-F(x)}h=\frac1h\int_x^{x+h}f=f(\xi_x(h))\to f(x)$. Si usa anche per stimare integrali e nei limiti con funzioni integrali (es. 4 dell'esercitazione 20, 2022-23: $\lim_{x\to0}\frac1x\int_0^x\cos t^2\,dt$).

## Nei corsi
- **Analisi 1** (triennale): "media integrale e teorema della media integrale". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (cor. 5.2.4, def. 5.2.5, PDF p. 179); `triennale/ANNO 1/analisi 1/Appunti, riassunti e teoremi/Analisi Matematica 1 - TEOREMI.pdf` (riga "Media integrale").

## Prerequisiti
- [[Proprietà dell'integrale definito]]: monotonia tra m e M
- [[Teorema dei valori intermedi]]: f assume il valore medio

## Porta a
- [[Teorema fondamentale del calcolo integrale]]: nel rapporto incrementale

## Collegati
- Nessuno.
