---
tipo: competenza
area: probabilita
corsi: [Prob e statistica, Modelli statistici]
livello: [triennale, magistrale]
aliases: ["multinomial distribution", "legge multinomiale", "Multinomiale(m, p1, ..., pN)", "v.a. multinomiale"]
tags: [competenza, area/probabilita]
---

# Distribuzione multinomiale

> Generalizzazione vettoriale della binomiale: conta quante volte compare ciascuno di $N+1$ risultati in $m$ prove ripetute e indipendenti.

## Definizione / enunciato
Si fanno $m$ prove ripetute e indipendenti con $N+1$ risultati possibili, di probabilità $p_1,\dots,p_N$ e $p_{N+1}=1-\sum_{i=1}^Np_i$. Sia $X_i$ il numero di risultati di tipo $i$ ($X_{N+1}=m-\sum_{i\le N}X_i$). Il vettore $\mathbf X=(X_1,\dots,X_N)\sim\mathrm{Multinomiale}(m,p_1,\dots,p_N)$, con $\mathbf X(\Omega)=\{(m_1,\dots,m_N)\in\{0,\dots,m\}^N:\sum m_i\le m\}$.

## Formule chiave
$$p_{\mathbf X}(m_1,\dots,m_N)=\frac{m!}{m_1!\cdots m_N!\,(m-\sum_i m_i)!}\,p_1^{m_1}\cdots p_N^{m_N}\Big(1-\sum_ip_i\Big)^{m-\sum_i m_i},$$
dove la frazione è il coefficiente multinomiale $\binom{m}{m_1,\dots,m_{N+1}}$. Le **marginali** sono binomiali: $X_i\sim B(m,p_i)$.

## Intuizione
Con $N=1$ si ritrova la binomiale ($X$ successi, $m-X$ insuccessi). Raggruppare categorie dà ancora una multinomiale con le probabilità sommate.

## Come si usa
Esercizio (lezione 3): 10 estrazioni con reimmissione da un'urna con 50 nere, 20 rosse, 20 bianche, 10 verdi. $\mathbf X=(X_1,X_2,X_3)\sim\mathrm{Mult}(10;\frac12,\frac15,\frac15)$:
- 5 nere, 3 rosse, 1 bianca: $\frac{10!}{5!3!1!1!}(\frac12)^5(\frac15)^3(\frac15)(\frac1{10})=0.0252$;
- 5 nere e 3 rosse (bianche e verdi raggruppate, $p'_3=\frac3{10}$): $\frac{10!}{5!3!2!}(\frac12)^5(\frac15)^3(\frac3{10})^2=0.0567$;
- 5 nere: $X_1\sim B(10,\frac12)$, $\binom{10}5(\frac12)^{10}=0.2461$.

## Nei corsi
- **Prob e statistica** (triennale): esempio di vettore aleatorio discreto, lezione 3. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione03(06-10-2023).pdf` (pp. 8-11).
- **Modelli statistici** (magistrale): $\mathbf X\sim\mathrm{Mult}(n;\pi_1,\dots,\pi_D)$, legge dei conteggi di $D$ categorie in $n$ prove (libro, cap. 5, Def. 5.6), somma di $n$ Multinoulli i.i.d. (Prop. 5.7). Momenti $\mathbb E(\mathbf X)=n\boldsymbol\pi$, $\operatorname{VarCov}(\mathbf X)=n(\operatorname{diag}(\boldsymbol\pi)-\boldsymbol\pi\boldsymbol\pi')$, cioè $\operatorname{Cov}(X_i,X_j)=-n\pi_i\pi_j$ (Prop. 5.8); **aggregazione**: sommando categorie si resta multinomiali, marginali e somme parziali binomiali (Prop. 5.9); condizionate $(X_2,\dots,X_D)\mid X_1=x_1\sim\mathrm{Mult}(n-x_1;\pi_j/(1-\pi_1))$ (Prop. 5.11); Poisson indipendenti condizionate al totale sono multinomiali (Prop. 5.13). Esempio di controllo qualità $\mathrm{Mult}(10;0.02,0.03,0.01,0.94)$: $P(X_A=1,X_B=2,X_C=0,X_0=7)\approx0.004202$ e, poiché i difettosi sono $\mathrm{Bin}(10,0.06)$, $P(\text{almeno 2 difettosi})\approx0.1176$. Base asintotica del test chi-quadro (TLC multinomiale). Fonti: `Libri/Modelli statistici/capitoli/cap05.tex` (§5.2, pp. 80-84); `magistrale/Modelli statistici/PDF corretti/251015A.pdf`; codice `magistrale/Modelli statistici/codici/251023 Soluzione Es Multinomiale.R`.

## Prerequisiti
- [[Vettore aleatorio]]: è un vettore discreto
- [[Distribuzione binomiale]]: caso $N=1$ e marginali
- [[Calcolo combinatorio]]: coefficiente multinomiale

## Porta a
- Nessuno nel corso (Prob e statistica).
- [[Coniugatezza Dirichlet-multinomiale]]: verosimiglianza con prior di Dirichlet (Modelli statistici)
- [[Test chi-quadro di bontà dell'adattamento]]: distribuzione dei conteggi sotto $H_0$ (Modelli statistici)
- [[Distribuzione Multinoulli]]: la multinomiale ne è la somma (Modelli statistici)

## Collegati
- [[Densità congiunta]]: esempio di densità discreta congiunta
