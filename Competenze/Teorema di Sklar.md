---
tipo: competenza
area: probabilita
corsi: [Prova finale]
livello: [triennale]
aliases: ["Sklar's theorem", "teorema di Sklar (1959)", "Sklar", "rappresentazione copula-marginali", "F(x,y) = C(F1(x), F2(y))"]
tags: [competenza, area/probabilita]
---

# Teorema di Sklar

> Ogni funzione di ripartizione congiunta si scrive come una copula applicata alle marginali; viceversa, copula più marginali qualsiasi danno sempre una f.d.r. congiunta.

## Definizione / enunciato
**Teorema** (Sklar 1959; Nelsen, Thm 2.3.3). Sia $H$ una f.d.r. congiunta con marginali $F$ e $G$. Allora esiste una copula $C$ tale che, per ogni $x,y\in\mathbb R$,
$$H(x,y)=C\big(F(x),G(y)\big).$$
Se $F$ e $G$ sono continue, $C$ è **unica**; altrimenti è univocamente determinata su $\operatorname{Ran}F\times\operatorname{Ran}G$.
**Viceversa**: se $C$ è una copula e $F,G$ sono f.d.r. univariate, la $H$ così definita è una f.d.r. congiunta con marginali $F$ e $G$.

## Formule chiave
- Caso $d$-dimensionale (Pellerey, slide 22): $F(x_1,\dots,x_d)=C(F_1(x_1),\dots,F_d(x_d))$, e la copula si ricava invertendo le marginali:
$$C(u_1,\dots,u_d)=F\big(F_1^{-1}(u_1),\dots,F_d^{-1}(u_d)\big).$$
- Densità (caso assolutamente continuo, tesi §5.2.1): $f(\mathbf x)=c\big(F_1(x_1),\dots,F_d(x_d)\big)\prod_j f_j(x_j)$.

## Intuizione
La legge congiunta si spezza in due ingredienti indipendenti: le marginali (come si comporta ciascuna variabile) e la copula (come si muovono insieme). Per variabili discrete il teorema vale ancora, ma la copula non è identificata in modo unico: per i dati di conteggio va usata con cautela (Pellerey, slide 30).

## Come si usa
Costruzione a due stadi (Pellerey, slide 31): si scelgono le marginali $F_{1}^{\alpha_1},\dots,F_d^{\alpha_d}$, poi una copula $C_\theta$, e si ottiene $F_{\alpha,\theta}(\mathbf x)=C_\theta(F_1^{\alpha_1}(x_1),\dots)$. Nella tesi è la giustificazione di tutto il lavoro: le marginali dei rendimenti possono essere t di Student (code pesanti) mentre la dipendenza è descritta da una copula gaussiana o di Gumbel (§1.1, §3.1.2). Nella stima, il teorema fa sì che la log-verosimiglianza si separi in un termine di copula e in termini marginali.

## Nei corsi
- **Prova finale** (triennale): enunciato bivariato e "conseguenze del teorema" (costruzione di modelli, separazione tra marginali e dipendenza). Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§2.1.2, p. 14; §3.1.2, p. 20; §5.2.1, p. 42); `triennale/ANNO 3/Prove finali/An Introduction to Copulas - Nelsen.pdf` (Thm 2.3.3); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 22, 30, 31); slide della discussione `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/TESI_PPTX.pptx` (slide "Teorema di Sklar").

## Prerequisiti
- [[Copula]]: oggetto del teorema
- [[Funzione di ripartizione]]: marginali $F$, $G$ e congiunta $H$
- [[Trasformazione integrale di probabilità]]: $F(X)$ uniforme se $F$ è continua

## Porta a
- [[Densità di una copula]]: fattorizzazione della densità congiunta
- [[Massima verosimiglianza per copule]]: la verosimiglianza si separa
- [[Metodo IFM]]: stima a due stadi marginali + copula
- [[Simulazione da una copula]]: si simula $C$ e poi si applicano le quantili marginali

## Collegati
- [[Indipendenza di variabili aleatorie]]: caso particolare $C=\Pi$
- [[Densità congiunta]]: forma "densità" del teorema
