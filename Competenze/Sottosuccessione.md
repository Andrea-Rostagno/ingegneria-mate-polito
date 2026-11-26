---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["subsequence", "successione estratta", "teorema di Bolzano-Weierstrass", "Bolzano-Weierstrass"]
tags: [competenza, area/analisi]
---

# Sottosuccessione

> Una sottosuccessione si ottiene scegliendo infiniti termini con indici crescenti; se la successione ha limite, ogni sua sottosuccessione ha lo stesso limite.

## Definizione / enunciato
Data $\{a_n\}$ e una funzione strettamente crescente $\sigma:\mathbb N\to\mathbb N$, $n_k=\sigma(k)$, la successione $k\mapsto a_{n_k}$ (cioè $a\circ\sigma$) è una **sottosuccessione** (successione estratta).

**Teoremi** (Mazzi, teor. 1.13-1.14; Morandotti, teor. 2.2.5):
- $\exists\lim_n a_n=\ell\iff$ per ogni sottosuccessione $\lim_k a_{n_k}=\ell$;
- in particolare $\lim_n a_n=\ell\iff\lim_k a_{2k}=\lim_k a_{2k+1}=\ell$.

**Corollario 1.12.** Se due sottosuccessioni hanno limiti diversi, $\{a_n\}$ non ha limite.

**Teorema di Bolzano-Weierstrass** (1.15, citato senza dimostrazione da Mazzi; teor. 2.2.24 in Morandotti): da ogni successione limitata si può estrarre una sottosuccessione convergente.

## Formule chiave
$$\lim_{k}a_{n_{k}}\ne\lim_{h}a_{n_{h}}\ \Rightarrow\ \nexists\lim_{n}a_n$$

## Intuizione
Una sottosuccessione "guarda" la successione solo su una parte degli indici: se tutta la successione si avvicina a $\ell$, a maggior ragione lo fa ogni sua parte. Il teorema si usa soprattutto al contrario, per dimostrare che un limite non esiste.

## Come si usa
$a_n=(-1)^n$: i termini pari valgono $1$, i dispari $-1$, quindi il limite non esiste; $a_n=(-1)^n/n$: pari e dispari tendono a $0$, quindi $a_n\to0$. Per $q<-1$, $q^{2k}\to+\infty$ e $q^{2k+1}\to-\infty$, quindi $q^n$ non ha limite. Morandotti: $\cos(n\pi)$ non ha limite. Bolzano-Weierstrass è il passo chiave della dimostrazione del teorema di Weierstrass. Nella lezione del 13/10/2021 si costruiscono le sottosuccessioni con $n_k=2k$ e $n_k=2k+1$.

## Nei corsi
- **Analisi 1** (triennale). Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (§1.7.2, def. 1.11, teor. 1.13-1.15, cor. 1.12, es. 1.15-1.16, pp. 25-26); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (def. 2.1.6, teor. 2.2.5, 2.2.24, PDF pp. 57, 61, 78); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-10-13.pdf` (p. 1).

## Prerequisiti
- [[Limite di successione]]: ha lo stesso limite
- [[Funzione composta e funzione inversa]]: a_{n_k} è una composta

## Porta a
- [[Teorema di Weierstrass]]: si usa Bolzano-Weierstrass

## Collegati
- [[Caratterizzazione sequenziale del limite]]: stessa tecnica delle due successioni
