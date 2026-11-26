---
tipo: competenza
area: fisica
corsi: [Meccanica]
livello: [triennale]
aliases: ["principle of virtual work", "PLV", "lavoro virtuale", "virtual work", "vincoli ideali", "ideal constraints", "vincoli lisci", "configurazioni di confine", "boundary configurations", "equilibrio di un sistema vincolato"]
tags: [competenza, area/fisica]
---

# Principio dei lavori virtuali

> Una configurazione di un sistema con vincoli ideali è di equilibrio se e solo se il lavoro virtuale delle sole forze attive è non positivo per ogni spostamento virtuale (nullo per quelli reversibili).

## Definizione / enunciato
**Vincoli ideali** (Def. 6.3): quelli per cui $\delta L^{(v)}\ge0$ per ogni spostamento virtuale da ogni configurazione ammessa. Esempio: superficie liscia, con reazione $\vec\Phi$ normale e verso l'esterno, $\delta L^{(v)}=\vec\Phi\cdot\delta P\ge0$ (6.3); disco che rotola senza strisciare, $\delta L^{(v)}=\vec\Phi\cdot\delta C=0$ (6.4). Con attrito, invece, il segno non è garantito.
**Teorema 6.1 (PLV):** la configurazione $C$ di un sistema soggetto a vincoli ideali è di equilibrio se e solo se
$$\delta L^{(a)}\le0\quad\forall\,\delta P\text{ da }C,\qquad\text{con "=" per ogni }\delta P\text{ reversibile.}$$

## Formule chiave
Sistemi olonomi: $\delta L^{(a)}=\sum_hQ_h\delta q_h=Q\cdot\delta q$ (6.5).
- Configurazioni ordinarie (spostamenti reversibili): $Q_h(q_1,\dots,q_N)=0$ per ogni $h$ (6.6).
- Configurazioni di confine (Prop. 6.1): $Q_h=0$ se $\delta q_h$ è reversibile, $Q_h\le0$ se $\delta q_h\ge0$, $Q_h\ge0$ se $\delta q_h\le0$.

## Intuizione
Il PLV elimina le reazioni vincolari: i vincoli ideali "fanno quello che serve" senza compiere lavoro negativo. Il docente avverte che non è del tutto un teorema, perché l'unicità delle soluzioni non è garantita (Lect5 p. 57): è un principio del modello matematico.

## Come si usa
**Ex2** (Lect5 pp. 62-65): due aste di lunghezza $2l$ e massa $m$, incernierate tra loro e collegate da una molla di costante $k$. Con il potenziale $U=-8kl^2(\cos^2\vartheta+2\lambda\sin\vartheta)$ e $\lambda=\frac{mg}{8kl}$ si ottiene $Q=16kl^2(\sin\vartheta-\lambda)\cos\vartheta$. All'interno, l'equilibrio è $\sin\vartheta=\lambda$ se $\lambda<1$; ai bordi, $\vartheta=0$ ($\delta\vartheta\ge0$, $Q<0$) è sempre di equilibrio. Le reazioni si trovano invece con le equazioni cardinali.

## Nei corsi
- **Meccanica** (triennale): $\delta L^{(a)}$ e $\delta L^{(v)}$ sono i lavori virtuali delle forze attive e vincolari. Fonti: `triennale/ANNO 2/Meccanica/Lect5-Statics.pdf` (pp. 56-58, 62-65; numerazione stampata); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` ("Principio dei lavori virtuali (PLV)", "Statica dei sistemi olonomi", pp. 119-131).

## Prerequisiti
- [[Spostamenti virtuali]]: lavoro sugli spostamenti virtuali
- [[Classificazione dei vincoli]]: bilateri e unilateri, ideali
- [[Reazione vincolare]]: δL^(v) ≥ 0 definisce i vincoli ideali

## Porta a
- [[Teorema di stazionarietà del potenziale]]: caso di forze conservative
- [[Principio di d'Alembert]]: si estende alla dinamica con le forze d'inerzia

## Collegati
- [[Componenti lagrangiane delle forze]]: δL^(a) = Σ Q_h δq_h
- [[Equilibrio statico del corpo rigido]]: per il rigido equivale alle equazioni cardinali
- [[Potenza delle forze su un corpo rigido]]: δL = R·δΩ + M·ε′
