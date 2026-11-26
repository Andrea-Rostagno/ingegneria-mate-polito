---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["fundamental lemma of the calculus of variations", "lemma di du Bois-Reymond", "lemma fondamentale"]
tags: [competenza, area/analisi]
---

# Lemma fondamentale del calcolo delle variazioni

> Se una funzione integrata contro ogni funzione test dà zero, allora è nulla (quasi ovunque): è ciò che permette di tornare da un'identità integrale all'equazione puntuale.

## Definizione / enunciato
**Lemma 2.2.1 (versione continua, $n=1$).** Sia $u\in C^0(a,b)$ tale che
$$\int_a^bu(x)\varphi(x)\,dx=0\qquad\text{per ogni }\varphi\in C_c^\infty(a,b).$$
Allora $u\equiv0$ in $(a,b)$.

**Corollario 4.2.5 (versione generale).** Sia $\Omega\subset\mathbb R^n$ aperto e $u\in L^1_{\rm loc}(\Omega)$ con
$$\int_\Omega u(x)f(x)\,dx=0\qquad\text{per ogni }f\in C_c^\infty(\Omega).\qquad(4.12)$$
Allora $u=0$ quasi ovunque in $\Omega$.

## Formule chiave
Dimostrazione del Cor. 4.2.5: per $g\in L^\infty(\mathbb R^n)$ a supporto compatto in $\Omega$, $g_k:=\rho_k*g\in C_c^\infty(\Omega)$ è un test ammissibile; $g_k\to g$ in $L^1$ (densità), quindi q.o. su una sottosuccessione, e $\|g_k\|_\infty\le\|g\|_\infty$ (Young): per convergenza dominata $\int_\Omega ug=0$. Scegliendo $g=\operatorname{sgn}u$ su un compatto $K$ e $0$ fuori si ottiene $\int_K|u|=0$.

## Intuizione
Le funzioni test sono abbastanza "ricche" da distinguere qualunque funzione localmente integrabile. Nella versione continua basta la permanenza del segno: se $u(x_0)>0$, si prende $\varphi\ge0$ concentrata vicino a $x_0$ e l'integrale è positivo.

## Come si usa
- Dalla forma integrale (debole) all'equazione: nell'Es. 2.2.2, se $\int u'\varphi'-\int f\varphi=0$ per ogni $\varphi$ e $u\in C^2$, integrando per parti si ottiene $\int(-u''-f)\varphi=0$, quindi $-u''=f$.
- Principio di Dirichlet: dall'equazione di Eulero-Lagrange integrale si ricava $-\Delta u=f$.
- Prop. 5.1.4: se $T_{f_1}=T_{f_2}$ in $\mathcal D'(\Omega)$ allora $f_1=f_2$ q.o., cioè $L^1_{\rm loc}$ si identifica con un sottoinsieme di $\mathcal D'$.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): Lemma 2.2.1 (§2.2, dimostrato per assurdo con la permanenza del segno), Cor. 4.2.5 (versione $L^1_{\rm loc}$ via mollificatori), usato in Prop. 5.1.4, Lemma 3.1.5 e Teor. 3.6.1. Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 10-11, 46, 49).

## Prerequisiti
- [[Teorema della permanenza del segno]]: dimostrazione della versione continua
- [[Mollificatori]]: costruzione delle funzioni test nella versione generale
- [[Sottospazi densi di Lp]]: $\rho_k*g\to g$ in $L^1$ (Teor. 4.2.3) nella dimostrazione del Cor. 4.2.5

## Porta a
- [[Principio variazionale di Dirichlet]]: dal minimo all'equazione
- [[Formulazione debole di un problema ellittico]]: legame fra forma debole e forma forte

## Collegati
- [[Derivata distribuzionale]]: unicità della derivata debole e delle distribuzioni di tipo funzione
- [[Funzioni test]]: la classe con cui si testa
