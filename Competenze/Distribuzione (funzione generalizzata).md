---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità, Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["distribution", "generalized function", "distribuzione", "distribuzioni di Schwartz", "D'", "distribuzione regolare", "regular distribution", "<T, phi>"]
tags: [competenza, area/analisi]
---

# Distribuzione (funzione generalizzata)

> Una distribuzione è un funzionale lineare e continuo sulle funzioni test: generalizza le funzioni (che agiscono per integrazione) e include oggetti come la delta di Dirac.

## Definizione / enunciato
**Definizione 4.8.** Una distribuzione è una $T:\mathcal D\to\mathbb R$ tale che
1. $T$ è **lineare**: $T(\lambda_1\varphi_1+\lambda_2\varphi_2)=\lambda_1T(\varphi_1)+\lambda_2T(\varphi_2)$;
2. $T$ è **continua**: se $\varphi_n\to\varphi$ in $\mathcal D$, allora $T(\varphi_n)\to T(\varphi)$.

Per linearità basta la continuità in $0$ ($\varphi_n\to0\Rightarrow T(\varphi_n)\to0$). Si scrive $\langle T,\varphi\rangle$; l'insieme delle distribuzioni $\mathcal D'$ è uno spazio vettoriale.

## Formule chiave
**Distribuzioni regolari** (Esempio 4.9): per $f\in\mathcal R^1_{loc}(\mathbb R)$
$$\langle T_f,\varphi\rangle=\int_{-\infty}^{+\infty}f(x)\varphi(x)\,dx,\qquad \varphi\in\mathcal D\quad(4.6).$$
La continuità segue dalla stima $|\langle T_f,\varphi_n\rangle|\le\sup_{|x|<a}|\varphi_n(x)|\int_{-a}^a|f(x)|\,dx\to0$.

## Intuizione
Una distribuzione è un "segnale" conosciuto solo tramite le sue medie contro strumenti di misura lisci. La notazione $\langle T,\varphi\rangle$ viene proprio dal prodotto scalare $\int f\varphi$ delle distribuzioni regolari.

## Come si usa
Per verificare che una formula definisca una distribuzione si controllano linearità e continuità. Esempi 4.11-4.13: $\sum_i\lambda_i\delta_{a_i}$ agisce come $\sum_i\lambda_i\varphi(a_i)$; $T_{\sin x}-12\delta_4$ dà $\int\sin x\,\varphi\,dx-12\varphi(4)$; invece $\varphi\mapsto\int|\varphi(x)|\,dx$ non è lineare, quindi non è una distribuzione.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §4.1 (motivazioni) e §4.4 "Distribuzioni: definizione ed esempi". Fonti: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 4 (1).pdf` (pp. 10-13 del PDF); `9 - Introduzione Distribuzioni (1).pdf` (Richiami di teoria).
- **Equazioni alle derivate parziali** (triennale): Def. 5.1.3 su $\Omega\subset\mathbb R^n$ (continuità verificata sulle successioni infinitesime in $\mathcal D$); catena di inclusioni $\mathcal D(\Omega)\subset L^2(\Omega)\simeq(L^2(\Omega))'\subset L^1_{\rm loc}(\Omega)\subset\mathcal D'(\Omega)$ (5.3), con $T_f$ distribuzione "di tipo funzione" e Prop. 5.1.4 ($T_{f_1}=T_{f_2}\Rightarrow f_1=f_2$ q.o., dal lemma fondamentale del calcolo delle variazioni). Usate per dare senso alle soluzioni distribuzionali delle EDP. Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 47-49).

## Prerequisiti
- [[Funzioni test]]: funzionale lineare continuo su $\mathcal D$
- [[Integrale di Riemann]]: le distribuzioni regolari agiscono per integrazione

## Porta a
- [[Delta di Dirac]]: esempio fondamentale non regolare
- [[Valore principale di 1 su x]]: distribuzione non regolare
- [[Derivata distribuzionale]]: derivata definita per dualità
- [[Operazioni sulle distribuzioni]]: traslazioni, riscalamenti, prodotti
- [[Convergenza di distribuzioni]]: convergenza debole in $\mathcal D'$
- [[Supporto di una distribuzione]]: dove $T$ non è nulla
- [[Distribuzioni temperate]]: sottoclasse di $\mathcal D'$

## Collegati
- Nessuno.
